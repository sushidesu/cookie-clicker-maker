type Props = {
  children?: React.ReactNode
}

export function Container({ children }: Props): JSX.Element {
  return <div className="mx-auto mx-auto px-4 max-w-2xl">{children}</div>
}
