import { ReactNode, useState } from "react"
import { Emoji, EmojiData, NimblePicker, Data, BaseEmoji } from "emoji-mart"
import data from "emoji-mart/data/twitter.json"
import { Popover } from "components/Popover"

export type Props = {
  onIconSelect: (icon: string) => void
}

type MaybeBaseEmoji = Partial<BaseEmoji>

export function EmojiPicker({ onIconSelect }: Props) {
  const DATA = (data as unknown) as Data
  // TODO: defualtは親からの値でセットしたい
  const COOKIE: BaseEmoji = {
    colons: ":cookie:",
    emoticons: [],
    id: "cookie",
    name: "Cookie",
    native: "🍪",
    skin: null,
    unified: "1f36a",
  }
  const [showPicker, setShowPicker] = useState(false)
  const [selectedEmoji, setSelectedEmoji] = useState<BaseEmoji>(COOKIE)
  const toggleShowPicker = () => {
    setShowPicker((prev) => !prev)
  }

  const handleSelect: (emoji: EmojiData) => void = (emoji) => {
    const maybeBaseEmoji = emoji as MaybeBaseEmoji
    const selectedBaseEmoji: BaseEmoji | null = maybeBaseEmoji.native
      ? (maybeBaseEmoji as BaseEmoji)
      : null

    if (selectedBaseEmoji) {
      setSelectedEmoji(selectedBaseEmoji)
      onIconSelect(selectedBaseEmoji.colons)
      toggleShowPicker()
    }
  }

  return (
    <div>
      <button
        type="button"
        onClick={toggleShowPicker}
        className="bg-transparent"
      >
        <Emoji set="twitter" emoji={selectedEmoji.colons} size={48} />
      </button>
      <Popover show={showPicker}>
        <NimblePicker
          sheetSize={32}
          set="twitter"
          onSelect={handleSelect}
          data={DATA}
        />
      </Popover>
    </div>
  )
}
