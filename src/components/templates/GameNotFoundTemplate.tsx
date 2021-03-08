import { Layout, Props as LayoutProps } from "components/Layout"

type Props = OmitChildren<LayoutProps>

export function GameNotFoundTemplate(props: Props): JSX.Element {
  return (
    <Layout {...props}>
      <main>
        <div>not found</div>
      </main>
    </Layout>
  )
}
