export type Props = {
  children: React.ReactNode
  show: boolean
}

export function Popover({ children, show }: Props): JSX.Element {
  return <div>{show && children}</div>
}
