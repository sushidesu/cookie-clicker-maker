import { Game } from "domain/entity"
import { Emoji } from "emoji-mart"

export type Props = {
  game: Game
}

export function GameCard({ game }: Props) {
  return (
    <div className="flex flex-col items-center mt-4 mx-auto p-6 max-w-sm bg-white rounded-xl shadow-md space-y-2">
      <p className="font-semibold">{game.name}</p>
      <Emoji emoji={game.icon} set="twitter" size={64} />
      <p>{`作成者: ${game.createdBy}`}</p>
    </div>
  )
}
