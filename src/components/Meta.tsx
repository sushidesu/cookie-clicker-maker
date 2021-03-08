export function Meta(): JSX.Element {
  const TITLE = "Cookie Clicker Maker"
  const DESC = "クッキークリッカーみたいなゲームをたくさん投稿しよう"
  const IMG_URL = "https://cookie.dayo.app/images/ogp.png"
  const URL = "https://cookie.dayo.app"
  return (
    <>
      <meta name="description" content={DESC} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={TITLE} />
      <meta property="og:description" content={DESC} />
      <meta property="og:image" content={IMG_URL} />
      <meta property="og:url" content={URL} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={URL} />
      <meta name="twitter:title" content={TITLE} />
      <meta name="twitter:description" content={DESC} />
      <meta name="twitter:image:src" content={IMG_URL} />
    </>
  )
}
