import { useEffect } from 'react'
import { IQuestion } from '../../Constants/Constants'
import { dataSelector, resetHasAnswered, resetQuizState, setAttemptQuestion, setEndQuiz, setHasFinishedQuestions, setSelectedOption, setStartQuiz } from '../../redux/dataSlice'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { QuestionItemStyles } from '../../styles/main'
import Button from '../Button/Button'
import QuestionitemOptions from './QuestionitemOptions'

interface QuestionItemProps {  
    question: IQuestion
}

const QuestionItem = ({question}: QuestionItemProps) => {
   //when i pick an option i should be able to see my next button
   const {isQuestionAnswered, hasFinishedQuestions,attemptedQuestionsId, numberOfQuestionsSelected} = useAppSelector(dataSelector)
   const dispatch = useAppDispatch()
   const handleNextQuestion = () => {
        if(hasFinishedQuestions){
          dispatch(setEndQuiz(true))
          dispatch(resetQuizState())
          
        }
        else {
           dispatch(setAttemptQuestion()) 
        }
      dispatch(resetHasAnswered())
      dispatch(setSelectedOption(null))
   }
   useEffect(() =>  {
    if((attemptedQuestionsId as unknown as number[]).length - numberOfQuestionsSelected === 0) {
      dispatch(setHasFinishedQuestions(true))
    }
   }, [])

  return (
    <>
    {question?.attemptQuestion && 
      <QuestionItemStyles>
        <h1>{question.question} </h1>
        <div className='question-options'>
            {question.options.map((option:any, index:number) => (
                <QuestionitemOptions key={index} answer={question.answer} option={option} /> 
            ))}
         {isQuestionAnswered &&
         <div className='question-button'>
            {hasFinishedQuestions ?
            <Button onClick={handleNextQuestion} background='#F9A826' width='120px' border='none' textColor='#fff' title='Finish'/> : 
            <Button onClick={handleNextQuestion} background='#F9A826' width='120px' border='none' textColor='#fff' title='Next'/>
            }     
          </div>
         }
          
        </div>
      </QuestionItemStyles> 
      }
    </>
   
  )
}

export default QuestionItem 