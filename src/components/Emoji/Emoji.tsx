import { useAppSelector } from '../../redux/hooks'
import { dataSelector } from '../../redux/dataSlice'
import { EmojiStyles } from '../../styles/main'
import EmojiItem from './EmojiItem'
const Emoji = () => {
    const {emojiList} = useAppSelector(dataSelector)
  return (
    <EmojiStyles>
      {emojiList.map((emoji) => (
       <>
        <EmojiItem key={emoji.id} emoji={emoji} emojiId={emoji.id} />
       </>
      ))}
    </EmojiStyles>
  )
}

export default Emoji