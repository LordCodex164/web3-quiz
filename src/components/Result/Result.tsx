import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { ResultStyles } from "../../styles/main"
import Button from "../Button/Button"
import { setStartQuiz, setEndQuiz, dataSelector, resetQuizScore } from "../../redux/dataSlice"

const Result = () => {
    const dispatch = useAppDispatch()

    const {numberOfQuestionsSelected, playerScore} = useAppSelector(dataSelector)

    const handleTryAgain = () => {
        dispatch(setStartQuiz(false))
        dispatch(setEndQuiz(false))
        dispatch(resetQuizScore())
    }

    const calcPerCent = (playerScore: number, numberOfQuestionsSelected: number) => {
        const value = (playerScore / numberOfQuestionsSelected) * 100
        return value.toFixed(0)
    }

  return (
    <ResultStyles>
      <div className="results">
        <p>Results</p>
        <p>You score <span>{playerScore}/ {numberOfQuestionsSelected}</span>{"  "} ({calcPerCent(playerScore, numberOfQuestionsSelected)}%)</p>
      </div>
      <div className="button">
        <Button title="Try Again" width="200px" onClick={handleTryAgain}/>
      </div>
     </ResultStyles>
  )
}

export default Result