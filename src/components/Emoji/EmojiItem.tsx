import { IEmoji } from "../../Constants/Constants";
import CryEmoji from "./CryEmoji";
import FrownEmoji from "./FrownEmoji";
import JoyEmoji from "./JoyEmoji";
import { UseDispatch, useDispatch } from "react-redux";

interface EmojiItemProps {
    emojiId: number;
    emoji: IEmoji;
}

const EmojiItem = ({emojiId, emoji}: EmojiItemProps) => {
  
  return (
    <>
        {emojiId == 0 && (
            <>
            <JoyEmoji supcolor={emoji.supcolor} id={emojiId} color={emoji.color} isSelected={emoji.isSelected}/>
            </>
        )}
         {emojiId == 1 && (
            <>
            <CryEmoji supcolor={emoji.supcolor} id={emojiId} color={emoji.color} isSelected={emoji.isSelected}/>
            </>
        )}
         {emojiId == 2 && (
            <>
            <FrownEmoji supcolor={emoji.supcolor} id={emojiId} color={emoji.color} isSelected={emoji.isSelected}/>
            </>
        )}
    </>
  )
}

export default EmojiItem