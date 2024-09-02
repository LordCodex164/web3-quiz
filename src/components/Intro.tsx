import { IntroStyles } from '../styles/main'
import Emoji from './Emoji/Emoji'

const Intro = () => {
  return (
    <IntroStyles>
        <h1>Welcome Idan!</h1>
        <p>How are you today?</p>
        <Emoji/>
    </IntroStyles>
  )
}

export default Intro