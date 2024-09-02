import { dataSelector } from "../../redux/dataSlice"
import {  useAppDispatch, useAppSelector } from "../../redux/hooks"
import { DropdownStyles } from "../../styles/main"
import { toggleQuestionNoList } from "../../redux/dataSlice"
import DropdownItem from "./DropdownItem"
import { Arrow } from "../../Icons/Icons"

const Dropdown = () => {
   const {showQuestionNoList, questionNoDropdownlist, numberOfQuestionsSelected} = useAppSelector(dataSelector)
    const dispatch = useAppDispatch()
    const showTogggle = () => {
        dispatch(toggleQuestionNoList())
    }
  return (
    <DropdownStyles onClick={showTogggle}>
        <div className="question">
            <p>{numberOfQuestionsSelected}</p>
            <Arrow isSelected={showQuestionNoList}/>
        </div>
        {showQuestionNoList &&
         <div className="list">
           {questionNoDropdownlist.map((item:any, index:number) => (
               <>
                 <DropdownItem key={index} question={item} $isLast={index === questionNoDropdownlist.length - 1}/>
               </>
           ))}
        </div> 
      }
        
    </DropdownStyles>

  )
}
export default Dropdown