import Link from "next/link"
import { Container } from "components/Container"

export function Header() {
  return (
    <header className="p-4 bg-teal-400">
      <Container>
        <div>
          <Link href="/">
            <p className="text-xl font-bold cursor-pointer">
              Cookie Clicker Maker
            </p>
          </Link>
        </div>
        <div></div>
      </Container>
    </header>
  )
}
