import TxLayout from '@/components/tx-flow/common/TxLayout'
import { UpdateSafeReview } from './UpdateSafeReview'
import SettingsIcon from '@/public/images/sidebar/settings.svg'

const UpdateSafeFlow = () => {
  return (
    <TxLayout title="Confirm transaction">
      <UpdateSafeReview />
    </TxLayout>
  )
}

export default UpdateSafeFlow
