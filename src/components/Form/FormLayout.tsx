import { CodeStyles, FormStyles, ResultStyles } from '../../styles/main'
import Intro from '../Intro'
import Code from '../Code/Code'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { dataSelector, setAttemptQuestion, setStartQuiz } from '../../redux/dataSlice'
import Questions from '../Questions/Questions'
import Button from '../Button/Button'
import Result from '../Result/Result'
import QuestionItem from '../Questions/QuestionItem'

const FormLayout = () => {

  const {bgTheme, hasStarted, hasEnded, questions} = useAppSelector(dataSelector)
  const dispatch = useAppDispatch()

  const startQuiz = () => {
    dispatch(setAttemptQuestion())
    dispatch(setStartQuiz(true))
  }

  return (
    <FormStyles>

      {hasEnded ? (
      <ResultStyles>
        <img className='' src='./result.svg'/>
      </ResultStyles>
       
      )
      : (
        <CodeStyles color={bgTheme.color as string}>
        <Code/>
      </CodeStyles>
      )
     }

        {/* logo */}
        <div className='adventure'>
          <img src='/adventure.svg'/>
        </div>
        {/*   Intro Layout */}
      {!hasEnded && !hasStarted && 
      <>
      <Intro/>
      <Questions/>
       <div className='button'>
        <Button width='200px' onClick={startQuiz} title='Test Yourself 🫵🏾'/>
       </div>
      </>
       }

       {hasStarted && (
        <>
         {questions.map((item:any,index:number) => (
          <QuestionItem 
          key={index}
          question={item}
          />
         ))}
        </>
       )}

      {hasEnded && <Result/>}
  
    </FormStyles>
  )
}

export default FormLayout