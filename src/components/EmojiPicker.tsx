import { ReactNode, useState } from "react"
import { Emoji, Picker, EmojiData } from "emoji-mart"

export function EmojiPicker() {
  const COOKIE: EmojiData = {
    colons: ":cookie:",
    emoticons: [],
    id: "cookie",
    name: "Cookie",
    native: "🍪",
    short_names: ["cookie"],
    skin: null,
    unified: "1f36a",
  }
  const [showPicker, setShowPicker] = useState(false)
  const [emoji, setEmoji] = useState<EmojiData>(COOKIE)
  const toggleShowPicker = () => {
    setShowPicker((prev) => !prev)
  }

  const PopOver = ({ children }: { children: ReactNode }) =>
    showPicker ? <div>{children}</div> : null

  return (
    <div>
      <button onClick={toggleShowPicker} className="bg-transparent">
        <Emoji set="twitter" emoji={emoji} size={48} />
      </button>
      <PopOver>
        <Picker
          sheetSize={32}
          set="twitter"
          onSelect={(emoji) => {
            setEmoji(emoji)
            toggleShowPicker()
          }}
        />
      </PopOver>
    </div>
  )
}
