type Props = {
  onSubmit: JSX.IntrinsicElements["form"]["onSubmit"]
}
export function GameCreateForm({ onSubmit }: Props) {
  return (
    <div className="flex flex-col items-center p-4 w-full bg-white shadow-md">
      <h1 className="text-xl font-bold">ゲームを作成</h1>
      <form onSubmit={onSubmit} className="w-full space-y-4">
        <div className="flex flex-col">
          <label className="text-grey-darkest text-lg font-bold">
            アイコン
          </label>
          <input
            className="text-grey-darkest px-3 py-2 border rounded"
            type="text"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-grey-darkest text-lg font-bold">
            ゲーム名
          </label>
          <input
            className="text-grey-darkest px-3 py-2 border rounded"
            type="text"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-grey-darkest text-lg font-bold">背景色</label>
          <input type="color" />
        </div>
        <button
          className="block mx-auto px-4 py-2 text-white text-lg font-bold tracking-widest bg-teal-500 hover:bg-teal-600 rounded"
          type="submit"
        >
          登録
        </button>
      </form>
    </div>
  )
}
