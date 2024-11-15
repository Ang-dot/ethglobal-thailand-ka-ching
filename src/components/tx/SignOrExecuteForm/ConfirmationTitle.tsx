import { SvgIcon, Typography } from '@mui/material'
import EditIcon from '@/public/images/common/edit.svg'
import css from './styles.module.css'

export enum ConfirmationTitleTypes {
  sign = 'confirm',
  execute = 'execute',
  propose = 'propose',
}

const ConfirmationTitle = ({ isCreation, variant }: { isCreation?: boolean; variant: ConfirmationTitleTypes }) => {
  return (
    <div className="flex flex-col">
      <div className="capitalize text-2xl font-bold">{variant}</div>
      <div className="text-xl">
        You&apos;re about to {isCreation ? 'create and ' : ''}
        {variant} this transaction.
      </div>
    </div>
  )
}

export default ConfirmationTitle
