import type { NextPage } from 'next'
import GameBoard from '@/components/game/GameBoard'
import Head from 'next/head'

const Board: NextPage = () => {
  return (
    <>
      <Head>
        <title>{'Ka-Ching – GameBoard'}</title>
      </Head>
      {/* <main> */}
      <GameBoard />
      {/* </main> */}
    </>
  )
}

export default Board
