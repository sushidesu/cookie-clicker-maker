import { useEffect } from "react"
import firebase from "firebase/app"
import type { AppProps } from "next/app"
import "tailwindcss/tailwind.css"
import "emoji-mart/css/emoji-mart.css"
import ReactModal from "react-modal"

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  ReactModal.setAppElement("#__next")
  useEffect(() => {
    firebase.auth().signInAnonymously()
  }, [])
  return <Component {...pageProps} />
}

export default MyApp
