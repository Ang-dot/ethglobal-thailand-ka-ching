import TxLayout from '@/components/tx-flow/common/TxLayout'
import { AppTitle } from '@/components/tx-flow/flows/SignMessage'
import ReviewSignMessageOnChain, {
  type SignMessageOnChainProps,
} from '@/components/tx-flow/flows/SignMessageOnChain/ReviewSignMessageOnChain'

const SignMessageOnChainFlow = ({ props }: { props: SignMessageOnChainProps }) => {
  return (
    <TxLayout
      title="Confirm message"
      step={0}
    >
      <ReviewSignMessageOnChain {...props} />
    </TxLayout>
  )
}

export default SignMessageOnChainFlow
