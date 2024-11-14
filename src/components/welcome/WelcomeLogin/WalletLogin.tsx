import useConnectWallet from '@/components/common/ConnectWallet/useConnectWallet'
import useWallet from '@/hooks/wallets/useWallet'
import EthHashInfo from '@/components/common/EthHashInfo'
import WalletIcon from '@/components/common/WalletIcon'

const WalletLogin = ({ onLogin, onContinue }: { onLogin: () => void; onContinue: () => void }) => {
  const wallet = useWallet()
  const connectWallet = useConnectWallet()

  const onConnectWallet = () => {
    connectWallet()
    onLogin()
  }

  if (wallet !== null) {
    return (
      <button
        onClick={onContinue}
        className="flex flex-col cursor-pointer w-full transform transition-transform hover:scale-[1.02] items-center space-x-2 bg-black text-white px-4 py-3 mt-3 rounded-md font-londrina-light text-[12px] sm:text-[16px] md:text-[20px]"
      >
        <div className="flex items-center space-x-2 ">
          {wallet.icon && <WalletIcon icon={wallet.icon} provider={wallet.label} width={24} height={24} />}
          <span>Continue with {wallet.label} Wallet</span>
        </div>
        {wallet.address && (
          <EthHashInfo address={wallet.address} shortAddress showName={false} copyAddress={false} showPrefix={true} />
        )}
      </button>
    )
  }

  return (
    <button className="group relative w-full" onClick={onConnectWallet}>
      <div className="w-full p-2 group-hover:bg-black transition duration-300 ease-in-out">
        <h2 className="text-white font-londrina font-[1000] text-2xl sm:text-3xl md:text-[35px] leading-tight sm:leading-relaxed md:leading-[56.78px] transition duration-300 ease-in-out">
          <span className="group-hover:hidden">Connect Wallet</span>
          <span className="hidden group-hover:inline underline text-[#909B0E]">&gt; Connect Wallet</span>
        </h2>
      </div>
    </button>
  )
}

export default WalletLogin
