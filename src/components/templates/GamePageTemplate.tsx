import { Layout } from "components/Layout"
import { Emoji } from "emoji-mart"
import { Game } from "domain/entity"

export type Props = {
  game: Game
  cookies: number
  onCookieClick: () => void
}

export function GamePageTemplate({ game, cookies, onCookieClick }: Props) {
  return (
    <Layout>
      <main>
        <div className="mt-24">
          <div className="ronded-xl flex flex-col items-center mt-4 mx-auto p-6 max-w-sm bg-white shadow-md space-y-2">
            <p className="font-semibold">{game.name}</p>
            <Emoji
              onClick={onCookieClick}
              emoji={game.icon}
              set="twitter"
              size={64}
            />
            <p>{cookies}</p>
            <p>{`作成者: ${game.createdBy}`}</p>
          </div>
        </div>
      </main>
    </Layout>
  )
}
