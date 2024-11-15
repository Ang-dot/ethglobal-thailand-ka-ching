import type { NextPage } from 'next'
import Head from 'next/head'
import NewSafe from '@/components/welcome/NewSafe'

const Welcome: NextPage = () => {
  return (
    <>
      <Head>
        <title>Ka-Ching: AI Agent-Powered Multisig Wallet</title>
      </Head>
      <meta
        name="description"
        content={
          'Wallet setup is so easy, even your grandparents could do it.\n' +
          'AI Agent-Powered Multisig Wallet + Explainable AI Fraudulent Transactions Detection + Gamified Gas Fees + Easy UI'
        }
      />
      <NewSafe />
    </>
  )
}

export default Welcome
