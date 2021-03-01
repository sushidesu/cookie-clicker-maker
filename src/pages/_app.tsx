import type { AppProps } from "next/app"
import "tailwindcss/tailwind.css"
import "emoji-mart/css/emoji-mart.css"

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
