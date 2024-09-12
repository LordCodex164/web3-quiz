import React, { useCallback, useEffect } from "react";
import { IOption } from "../../Constants/Constants"
import { dataSelector, incrementPlayerScore, setHasAnswered, setSelectedOption, setCorrectAnswerSound, setWrongAnswerSound } from "../../redux/dataSlice"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { QuestionitemOptionsStyles } from "../../styles/main"

interface QuestionItemOptionsProps {
  option: IOption;
  answer: number;
}

const QuestionitemOptions = ({option, answer}: QuestionItemOptionsProps) => {

    const [answerState, setAnswerState] = React.useState<number | undefined>()
    const [isAnswered, setIsAnswered] = React.useState<boolean>(false)
    const [isCorrect, setIsCorrect] = React.useState<boolean>(false)
    const [isWrong, setIsWrong] = React.useState<boolean>(false)

    const {selectedOption, playerScore} = useAppSelector(dataSelector)

    const dispatch = useAppDispatch()

    const getLetter = (index: number) => {
       switch(index){
        case 1:
        return 'A'
        case 2:
        return 'B'
        case 3:
        return 'C'
        case 4:
        return 'D'
       }
    }

    const handleSelectOption = () => {
        dispatch(setHasAnswered())
        //setSelectedOption(option)
        setIsAnswered(true)
        dispatch(setSelectedOption(option))
    }

    const incrementPlayerScoreState = useCallback(() => {
        dispatch(incrementPlayerScore() as any)
    }, [])

    useEffect(() => { 
     console.log("your option has been selected")
    }, [])

    useEffect(() => {
     if(selectedOption){
      if(option.id === selectedOption?.id && option.id !== answer){
      setTimeout(() => {
          setIsWrong(true)
          dispatch(setWrongAnswerSound(true))
      }, 1000)}
      setTimeout(() => {
        if(option.id === answer){
          setIsCorrect(true)
          dispatch(setCorrectAnswerSound(true))
        }
      }, 1500)}
      
    if(option.id == selectedOption?.id && option.id === answer){
      setTimeout(() => {
        setIsCorrect(true)
        dispatch(setCorrectAnswerSound(true))
        incrementPlayerScoreState()
        console.log("state increment")
      }, 1500)
    }
    }, [answer, selectedOption])

    useEffect(() => {
       console.log(playerScore, "the score has been updated")
    }, [isCorrect])

    
  return (
    <QuestionitemOptionsStyles $isSelected={selectedOption?.id === option.id} $isCorrect={isCorrect} $isWrong={isWrong} onClick={handleSelectOption} className="">
        <div>
          <span>{getLetter(option.id)}</span>
          <p>{option.text}</p>  
        </div> 
    </QuestionitemOptionsStyles>
  )
}

export default QuestionitemOptions