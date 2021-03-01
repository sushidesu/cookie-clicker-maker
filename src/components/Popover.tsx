export type Props = {
  children: React.ReactNode
  show: boolean
}

export function Popover({ children, show }: Props) {
  return <div>{show && children}</div>
}
