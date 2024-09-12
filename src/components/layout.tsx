import React,{useEffect, useRef} from 'react'
import Main from './main';
import { LayoutStyles } from '../styles/layout';
import { useAppSelector } from '../redux/hooks';
import { dataSelector } from '../redux/dataSlice';
import ReactConfetti from 'react-confetti';


const layout = () => {

     /*Map out all our audion files */
  const audioFiles = [
    "/bg-sound.mp3",
    "/correct.mp3",
    "/cut-idan.mp3",
    "/cut-lionishere.mp3",
    "/lose-sound.wav",
    "/who-want-to-be-a-millionaire.mp3"
  ];

  const audioRef = useRef<HTMLAudioElement | any>(null)
  const [audioIndex, setAudioIndex] = React.useState(5)
  const endGameRef = useRef<HTMLAudioElement>()
  const [loopSound, setLoopSound] = React.useState(true)

  const {bgTheme, playCorrectAnswerSound, playWrongAnswerSound, hasEnded, hasStarted} = useAppSelector(dataSelector)

  const winnerSound =  new Audio(audioFiles[1])

  const loserSound = new Audio(audioFiles[4])

  const getRandomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const playWinnnerSound = () => {
    winnerSound.load()
    winnerSound.play()
  }

  const playLoserSound = () => { 
    loserSound.load();
    loserSound.play()
    loserSound.volume = 0.8;
  }

  useEffect(() => {
    audioRef.current.setAttribute('src', audioFiles[audioIndex])
   if(hasStarted){
    setLoopSound(true)
    audioRef.current?.play();
    playWinnnerSound()
    audioRef.current.volume = 0.2;
   }
   if(hasEnded){
      audioRef.current.pause()
      audioRef.current.currentTime = 0
      setLoopSound(false)
   }
  },[hasStarted, hasEnded])

  console.log(hasStarted)

  console.log(playWrongAnswerSound)

  console.log(playCorrectAnswerSound)

  useEffect(() => {
   if(hasStarted){
      console.log("correct sound")
      playWinnnerSound()
   }
  }, [playCorrectAnswerSound])

  useEffect(() => {
    if(hasStarted){
      console.log("wrong sound")
      playLoserSound()
    }
  }, [playWrongAnswerSound])

  return (
    <>
    <audio ref={audioRef} src={audioFiles[audioIndex]} loop={loopSound}/>
    <LayoutStyles color={bgTheme.color as string} supcolor={bgTheme.supcolor as string}>
        <div className='first'></div>
        <Main/>
        <div className='second'></div>
        {hasEnded &&
         <ReactConfetti />
        }
    </LayoutStyles>
    </>
    
  )
}

export default layout