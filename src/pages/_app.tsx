import type { AppProps } from "next/app"
import "tailwindcss/tailwind.css"
import "emoji-mart/css/emoji-mart.css"
import ReactModal from "react-modal"

function MyApp({ Component, pageProps }: AppProps) {
  ReactModal.setAppElement("#__next")
  return <Component {...pageProps} />
}

export default MyApp
