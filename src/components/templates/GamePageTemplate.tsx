import Head from "next/head"
import Link from "next/link"
import { Layout, Props as LayoutProps } from "components/Layout"
import { Emoji } from "emoji-mart"
import { Game } from "domain/entity"
import { Meta } from "components/Meta"

export type Props = {
  game: Game
  cookies: number
  onCookieClick: () => void
} & OmitChildren<LayoutProps>

export function GamePageTemplate({
  game,
  cookies,
  onCookieClick,
  ...rest
}: Props): JSX.Element {
  return (
    <Layout {...rest}>
      <Head>
        <title>Cookie Clicker Maker</title>
        <link rel="icon" href="/favicon.ico" />
        <Meta />
      </Head>
      <main>
        <div className="mt-24 mx-4">
          <div className="ronded-xl flex flex-col items-center mt-4 mx-auto p-6 max-w-sm bg-white shadow-md space-y-4">
            <p className="font-semibold">{game.name}</p>
            <div
              onClick={onCookieClick}
              className={
                "flex items-center justify-center w-20 h-20 rounded-full cursor-pointer" +
                " shadow-lg active:shadow-sm" +
                " transform translate-y-0 active:translate-y-3" +
                " relative select-none"
              }
            >
              <div className="absolute z-10 right-1/2 top-1/2 w-full h-full bg-transparent select-none transform -translate-y-1/2 translate-x-1/2"></div>
              <Emoji emoji={game.icon} set="twitter" size={64} />
            </div>
            <p>{`カウント: ${cookies}`}</p>
            <p>{`作成者: ${game.createdBy}`}</p>
          </div>
          <Link href="/">
            <a className="block mt-8 mx-auto px-4 py-2 max-w-max font-bold bg-white rounded shadow-md cursor-pointer">
              トップに戻る
            </a>
          </Link>
        </div>
      </main>
    </Layout>
  )
}
