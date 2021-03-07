import { useState, useCallback } from "react"
import { Header } from "components/Header"
import { Modal } from "components/Modal"

type Props = {
  children: React.ReactNode
}

export function Layout({ children }: Props) {
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
        </div>
      </Modal>
    </div>
  )
}
