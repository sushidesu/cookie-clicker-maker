import { EmojiPicker, Props as PickerProps } from "components/EmojiPicker"

export type Props = {
  onSubmit: JSX.IntrinsicElements["form"]["onSubmit"]
  onNameBlur: JSX.IntrinsicElements["input"]["onBlur"]
  onCreatedByBlur: JSX.IntrinsicElements["input"]["onBlur"]
  onIconSelect: PickerProps["onIconSelect"]
  onBackgroundColorBlur: JSX.IntrinsicElements["input"]["onBlur"]
}
export function GameCreateForm({
  onSubmit,
  onNameBlur,
  onCreatedByBlur,
  onIconSelect,
  onBackgroundColorBlur,
}: Props): JSX.Element {
  return (
    <form onSubmit={onSubmit} className="w-full space-y-4">
      <div className="flex flex-col">
        <label className="text-grey-darkest text-lg font-bold">アイコン</label>
        <EmojiPicker onIconSelect={onIconSelect} />
      </div>
      <div className="flex flex-col">
        <label className="text-grey-darkest text-lg font-bold">ゲーム名</label>
        <input
          className="text-grey-darkest px-3 py-2 border rounded"
          maxLength={20}
          type="text"
          onBlur={onNameBlur}
        />
      </div>
      <div className="flex flex-col">
        <label className="text-grey-darkest text-lg font-bold">作成者</label>
        <input
          className="text-grey-darkest px-3 py-2 border rounded"
          maxLength={20}
          type="text"
          onBlur={onCreatedByBlur}
        />
      </div>
      <div className="flex flex-col">
        <label className="text-grey-darkest text-lg font-bold">背景色</label>
        <input type="color" onBlur={onBackgroundColorBlur} />
      </div>
      <button
        className="block mx-auto px-4 py-2 text-white text-lg font-bold bg-teal-500 hover:bg-teal-600 rounded shadow-md"
        type="submit"
      >
        ゲームを投稿
      </button>
    </form>
  )
}
