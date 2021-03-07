import { Header } from "components/Header"

type Props = {
  children: React.ReactNode
}

export function Layout({ children }: Props) {
  return (
    <div className="overflow-hidden">
      <Header />
      <div className="pb-8">{children}</div>
    </div>
  )
}
