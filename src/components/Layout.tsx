type Props = {
  children: React.ReactNode
}

export function Layout({ children }: Props) {
  return <div className="mx-auto p-4 max-w-2xl overflow-hidden">{children}</div>
}
