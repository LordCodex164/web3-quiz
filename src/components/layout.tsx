import React,{useRef} from 'react'
import Main from './main';
import { LayoutStyles } from '../styles/layout';
import { useAppSelector } from '../redux/hooks';
import { dataSelector } from '../redux/dataSlice';




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

  const audioRef = useRef<HTMLAudioElement>()

  const {bgTheme} = useAppSelector(dataSelector)
  
  return (
    <LayoutStyles color={bgTheme.color as string} supcolor={bgTheme.supcolor as string}>
        <div className='first'></div>
        <Main/>
        <div className='second'></div>
    </LayoutStyles>
  )
}

export default layout