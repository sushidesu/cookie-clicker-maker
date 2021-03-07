import ReactModal from "react-modal"

export type Props = {
  show: boolean
  children?: React.ReactNode
}

export function Modal({ children, show }: Props) {
  return <ReactModal isOpen={show}>{children}</ReactModal>
}
