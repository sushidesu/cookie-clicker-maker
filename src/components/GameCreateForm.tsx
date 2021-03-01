import { EmojiPicker } from "components/EmojiPicker"

export type Props = {
  onSubmit: JSX.IntrinsicElements["form"]["onSubmit"]
  onNameBlur: JSX.IntrinsicElements["input"]["onBlur"]
  onCreatedByBlur: JSX.IntrinsicElements["input"]["onBlur"]
  onIconBlur: JSX.IntrinsicElements["input"]["onBlur"]
  onBackgroundColorBlur: JSX.IntrinsicElements["input"]["onBlur"]
}
export function GameCreateForm({
  onSubmit,
  onNameBlur,
  onCreatedByBlur,
  onIconBlur,
  onBackgroundColorBlur,
}: Props) {
  return (
    <div className="flex flex-col items-center p-4 w-full bg-white shadow-md">
      <h1 className="text-xl font-bold">ゲームを作成</h1>
      <form onSubmit={onSubmit} className="w-full space-y-4">
        <div className="flex flex-col">
          <label className="text-grey-darkest text-lg font-bold">
            アイコン
          </label>
          <EmojiPicker />
        </div>
        <div className="flex flex-col">
          <label className="text-grey-darkest text-lg font-bold">
            ゲーム名
          </label>
          <input
            className="text-grey-darkest px-3 py-2 border rounded"
            type="text"
            onBlur={onNameBlur}
          />
        </div>
        <div className="flex flex-col">
          <label className="text-grey-darkest text-lg font-bold">作成者</label>
          <input
            className="text-grey-darkest px-3 py-2 border rounded"
            type="text"
            onBlur={onCreatedByBlur}
          />
        </div>
        <div className="flex flex-col">
          <label className="text-grey-darkest text-lg font-bold">背景色</label>
          <input type="color" onBlur={onBackgroundColorBlur} />
        </div>
        <button
          className="block mx-auto px-4 py-2 text-white text-lg font-bold tracking-widest bg-teal-500 hover:bg-teal-600 rounded shadow-md"
          type="submit"
        >
          ゲームを登録
        </button>
      </form>
    </div>
  )
}
