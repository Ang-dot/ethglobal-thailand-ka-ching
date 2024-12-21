import axios from 'axios';
import { GraphQLResponse } from './queryTypes';

export const fetchGraphQLData = async <T>(query: string) => {
  const response = await
    axios.post<GraphQLResponse<T>>('https://cartesi-rollup-ka-ching-ai-fraud-detection.up.railway.app/graphql', {
      query,
    });
  return response.data.data;
};
