import Link from "next/link"
import { Container } from "components/Container"

export type Props = {
  onPostClick: () => void
}

export function Header({ onPostClick }: Props): JSX.Element {
  return (
    <header className="p-4 bg-teal-400">
      <Container>
        <div className="flex items-center justify-between">
          <div>
            <Link href="/">
              <p className="text-xl font-bold cursor-pointer">
                Cookie Clicker Maker
              </p>
            </Link>
          </div>
          <div>
            <button
              className="px-4 py-1 font-bold bg-white rounded focus:outline-none shadow"
              onClick={onPostClick}
            >
              投稿
            </button>
          </div>
        </div>
      </Container>
    </header>
  )
}
