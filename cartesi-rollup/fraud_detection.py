from os import environ
import XGB_FRAUD_model as model
import numpy as np
import json
import joblib
import traceback
import logging
import requests
import warnings

logging.basicConfig(level="INFO")
logger = logging.getLogger(__name__)

rollup_server = environ["ROLLUP_HTTP_SERVER_URL"]
logger.info(f"HTTP rollup_server url is {rollup_server}")

def hex2str(hex):
    """
    Decodes a hex string into a regular string
    """
    return bytes.fromhex(hex[2:]).decode("utf-8")


def str2hex(str):
    """
    Encodes a string as a hex string
    """
    return "0x" + str.encode("utf-8").hex()

def map_json_to_numpy_array(json_data):
    keys_in_order = [
        "timeDiffFirstLast", "sentTransaction", "recvTransaction", "createdContractCount",
        "maxValueRecv", "avgValueRecv", "avgValueSent", "totalEthSent",
        "totalEthBalance", "erc20TotalEthRecv", "erc20TotalEthSent",
        "erc20TotalEthSentContract", "erc20UniqueSentAddress", "erc20UniqueRecvTokenCount"
    ]

    values_in_order = [json_data[key] for key in keys_in_order]
    return np.array([values_in_order])

def predict(numpy_array):
    """
    Predicts a given input's fraud prediction
    """

    # Load the saved PowerTransformer
    loaded_transformer = joblib.load('power_transformer.save')

    # Transform the new data using the saved PowerTransformer
    warnings.filterwarnings("ignore", message="X does not have valid feature names")
    scaled_data = loaded_transformer.transform(numpy_array)

    # Run prediction
    return model.score(scaled_data[0])


def handle_advance(data):
    logger.info(f"Received advance request data {data}")

    status = "accept"
    try:
        input = hex2str(data["payload"])
        json_input = json.loads(input)

        logger.info(f"Received input: '{json_input}'")

        wallet_address_features = map_json_to_numpy_array(json_input)
        logger.info(f"Wallet address features: {wallet_address_features}")

        # computes predicted classification for input
        prediction = predict(wallet_address_features)
        prediction_label = "fraud" if np.argmax(prediction) == 1 else "non-fraud"

        prediction_output = {
            "input": json_input,
            "features": wallet_address_features,
            "prediction": prediction,
            "prediction_label": prediction_label
        }
        logger.info(f"Data={json_input}, Output: {prediction_output}")

        # emits output notice with predicted class name
        output = str2hex(str(prediction_output))
        logger.info(f"Adding notice with payload: {output}")
        response = requests.post(
            rollup_server + "/notice", json={"payload": output})
        logger.info(
            f"Received notice status {response.status_code} body {response.content}")

    except Exception as e:
        status = "reject"
        msg = f"Error processing data {data}\n{traceback.format_exc()}"
        logger.error(msg)
        response = requests.post(
            rollup_server + "/report", json={"payload": str2hex(msg)})
        logger.info(
            f"Received report status {response.status_code} body {response.content}")

    return status


def handle_inspect(data):
    logger.info(f"Received inspect request data {data}")
    logger.info("Adding report")
    response = requests.post(rollup_server + "/report",
                             json={"payload": data["payload"]})
    logger.info(f"Received report status {response.status_code}")
    return "accept"


handlers = {
    "advance_state": handle_advance,
    "inspect_state": handle_inspect,
}

finish = {"status": "accept"}

while True:
    logger.info("Sending finish")
    response = requests.post(rollup_server + "/finish", json=finish)
    logger.info(f"Received finish status {response.status_code}")
    if response.status_code == 202:
        logger.info("No pending rollup request, trying again")
    else:
        rollup_request = response.json()
        data = rollup_request["data"]
        handler = handlers[rollup_request["request_type"]]
        finish["status"] = handler(rollup_request["data"])
