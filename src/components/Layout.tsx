import { useState, useCallback } from "react"
import Modal from "react-modal"
import { Header } from "components/Header"
import { GameCreateForm, Props as FormProps } from "components/GameCreateForm"

export type Props = {
  children: React.ReactNode
} & FormProps

export function Layout({ children, ...rest }: Props): JSX.Element {
  const [show, setShow] = useState(false)
  const toggleModal = useCallback(() => {
    setShow((prev) => !prev)
  }, [setShow])
  return (
    <div className="overflow-hidden">
      <Header onPostClick={toggleModal} />
      <div className="pb-8">{children}</div>
      <Modal
        preventScroll
        className="absolute inset-10 outline-none"
        isOpen={show}
      >
        <div className="relative flex flex-col items-center mx-auto pb-8 pt-4 px-6 w-full max-w-xl bg-white shadow-md">
          <button className="absolute right-2 top-2 p-2" onClick={toggleModal}>
            閉じる
          </button>
          <h1 className="mb-4 text-xl font-bold">ゲームを投稿する</h1>
          <GameCreateForm {...rest} />
        </div>
      </Modal>
    </div>
  )
}
