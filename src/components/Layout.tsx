import { useState, useCallback } from "react"
import { Header } from "components/Header"
import { Modal } from "components/Modal"
import { GameCreateForm, Props as FormProps } from "components/GameCreateForm"

export type Props = {
  children: React.ReactNode
} & FormProps

export function Layout({ children, ...rest }: Props) {
  const [show, setShow] = useState(false)
  const toggleModal = useCallback(() => {
    setShow((prev) => !prev)
  }, [setShow])
  return (
    <div className="overflow-hidden">
      <Header onPostClick={toggleModal} />
      <div className="pb-8">{children}</div>
      <Modal show={show}>
        <div>
          <button onClick={toggleModal}>close</button>
          <GameCreateForm {...rest} />
        </div>
      </Modal>
    </div>
  )
}
