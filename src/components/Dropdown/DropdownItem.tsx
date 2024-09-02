import React from 'react'
import { IDropdownItem } from '../../redux/dataSlice'
import { DropdownItemStyles } from '../../styles/main'
import { Tick } from '../../Icons/Icons'
import { useAppDispatch } from '../../redux/hooks'
import { toggleActiveDropdown } from '../../redux/dataSlice'

interface DropdownItemProps {
    question: IDropdownItem,
    $isLast: boolean,
}

const DropdownItem = ({question, $isLast}: DropdownItemProps) => {

  const dispatch = useAppDispatch()


  const toggleIsSelected = () => {  
    dispatch(toggleActiveDropdown(question.id))   
  }
  return (
    <DropdownItemStyles color='' isSelected={question.$isSelected} onClick={toggleIsSelected} $isLast={$isLast}>
           <p>{question.value}</p> 
           <p>{question.$isSelected && <Tick/>}</p>
      </DropdownItemStyles>
  )
}

export default DropdownItem
