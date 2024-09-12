import {css, styled} from "styled-components";
import {motion} from "framer-motion"
import { compVariants } from "../components/Animation/Animation";

export const MainStyles = styled.main`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: relative;
    z-index: 5;
    width: 100%;
    min-width: 250px;
    max-width: 584px;
    padding-top: 5em;
   h1{
    font-family: Raleway;
    color: #fff;
    font-size: 2.27em;
   }
   @media (max-width: 768px) {
     margin-left: 5%;
     margin-right: 5%
   }
`

export const FormStyles = styled.main`
    background: #fff;
    position: relative;
    border-radius: 1.5em; 
    min-height: 513.6px;
    width: 100%;
    padding: 2.5rem;
    .adventure{
        position: absolute;
        right: 0;
        top: -10%;
        object-fit: fill;
    }
  
`

export interface ICodeStyles {
   color:string
}

export const CodeStyles = styled.main<ICodeStyles>`
    svg{
        font-size: 48px;
    }
    ${({color}) => 
      color && 
      css`
        svg{
            fill: ${color};
        }
      `
    }
`
export const IntroStyles = styled.div`
  
   h1{
         font-family: Raleway;
         color: #1E355D;
         font-size: 40px;
         text-align: center; 
   }
   p{
    margin-top: 5em;
    text-align: center;
    font-size: 24px;
    font-weight: 500;
    color:#1E355D;
    font-family: DM Sans;
   }
`

export const EmojiStyles = styled.div`
   display: flex;
   gap: 0.5em;
   justify-content: center;
   min-width: 223px;
   margin-top: 8px;
`

interface IEmojiProps {
    isSelected: boolean;
    color: string;
}

export const EmojiItemStyles = styled.div<IEmojiProps>`
   text-align: center;
   display: flex;
   justify-content: center;
   object-fit: fill;
   font-size: 2em;
   svg{
    fill: rgba(96, 102, 208, 0.8);
    cursor: pointer;
    transition: 0.6s;
   }
   ${({isSelected, color}) => 
   isSelected && 
   css`
    svg{
        fill: ${color};
        transform: rotateZ(360deg);
    }
`}
`

export const QuestionStyles = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    gap: 20px;
    margin-top: 4em;
    align-items: center;
    p{
        font-family: DM Sans;
        font-size: 1.125rem;
        font-style: normal;
        color: #1D355D;
        font-size: 700;
    }
`

export const QuestionItemStyles = styled(motion.div).attrs(() => ({
    variants: compVariants,
    initial: "initial",
    animate: "final",
    exit: "exit"
}))`
   h1{
    color: #1E355D;
    font-weight: 700;
    font-size: 26.4px;
    font-family: DM Sans;
    margin-top: 7px;
    margin-bottom: 1.2em;
    font-style: normal;
    line-height: normal;
   }
   .question-options{
    display: flex;
    flex-direction: column;
    gap: 1.5em;
   }
   .question-button{
     display: flex;
     justify-content: end;
   }
   @media (max-width: 768px){
    h1{
        font-size: 18px;
    }
   }
`

export interface QuestionItemOptionsStylesProps {
   $isSelected?: boolean;
   $isCorrect?: boolean;
   $isWrong?: boolean;
}

export const QuestionitemOptionsStyles = styled.main<QuestionItemOptionsStylesProps>`
    border-top-right-radius: 12px;
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    border: 2px solid #8F94DE;
    padding: 10px 10px;
    transition: 0.8s;
    cursor: pointer;
    &:hover{
        scale: 1.05;
    }
   @keyframes isCorrectBlinkey {
    0%{
        color: #fff;
        background: #60BF88;
    }
    25%{
        color: #8F94DE;
        background: transparent;
    }
    50%{
        color: #fff;
        background: #60BF88;
    }
    75%{
        color: #8F94DE;
        background: transparent;
    }
    100%{
        color: #fff;
        background: #60BF88;
    }
   }
   @keyframes isWrongBlinkey {
    0%{
        color: #fff;
        background: #EA8282;
    }
    100%{
        color: #fff;
        background: #EA8282;
    }
   }
    ${({$isSelected}) => 
    $isSelected &&
    css`
     background: #F9A826;
     border: 2px solid #F9A826;
     color: #fff;
     span, p{
      color: #fff;
      line-height: normal;
     } 
    `
    }
    ${({$isCorrect}) => 
    $isCorrect &&
    css`
     background: #60BF88;
     border: 2px solid #60BF88;
     animation: isCorrectBlinkey 0.7s linear;
     span, p{
      color: #fff;
      line-height: normal;
     } 
    `
    
    }
    ${({$isWrong}) => 
    $isWrong &&
    css`
     background: #EA8282;
     border: 2px solid #EA8282;
     animation: isWrongBlinkey 1s linear;
     span, p{
      color: #fff;
      line-height: normal;
     } 
    `
    
    }
    div{
        display: flex;
        gap: 2em;
        color: #8F94DE;
        align-items: center;
        font-family: DM Sans;
        @media (max-width: 768px){
            gap: 1em;
        }
    }
    span{
        font-size: 24px;
        font-weight: 500;
    }
    p{
        font-size: 18px;
        font-weight: 500; 
    }
    @media (max-width: 768px){
        span{
            font-size: 18px;
            font-style: normal;
        }
        p{
            font-size: 14px;
            font-style: normal;
        }
    }
`

export const DropdownStyles = styled.div`
   border: 2.5px solid #8084DA;
   padding: 8px 5px;
   min-height: 39.5px;
   border-radius: 12px;
   position: relative;
   cursor: pointer;
   .question{
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
   }
   p{
    font-size: 24px;
    font-size: 700;
   }
   .list{
    border: 2px solid #1D355D;
    position: absolute;
    min-height: fit-content;
    min-width: 110px;    
    top: -4.2em;
    right: 0;
    left: -5px;
    z-index: 10;
    background: #fff;
    color: #1D355D;
   }
   
`

interface IDropdownItemStyles extends IEmojiProps {
    $isLast: boolean;
}

export const DropdownItemStyles = styled.div<IDropdownItemStyles>`
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 5px;
        padding: 5px;
    p{
        font-size: 10px;
        font-weight: 500;
    }
    ${({$isLast}) => 
      !$isLast && 
      css`
        border-bottom: 2.2px solid #8084DA;
        width: 100%;
      `
      }
    ${({isSelected}) =>
        isSelected &&
        css`
        p{
            color: #008101;
            font-weight: 700;
        }
        `
    }
      
    `

interface IButtonStyles {
    $width: string;
    $background: string;
    border?:string;
    $color: string;
}   

export const ButtonStyles = styled.button<IButtonStyles>`
    background: #fff;
    padding: 0.5em 1em;
    border-radius: 0.3em;
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
    margin-top: 1em;
    padding: 1.1em;
    border-radius: 12px;
    border: 2px solid #1D355D;
    ${({$width, $background, border, $color}) =>
        css`
        width: ${$width};
        background: ${$background};
        border: ${border};
        color: ${$color};
        `
    }
`

export const ListStyles = styled.div`
    position: absolute;
    background: #fff;
    min-width: 100%;
`

interface ISelectedStyles {
    $isSelected: boolean;
}   

export const ArrowStyles = styled.div<ISelectedStyles>`
    font-size: 16px;
    svg{
        transition: 0.6s;
        width: 25px;
        height: 25px;
    }
    ${({$isSelected}) => 
    !$isSelected && 
    css`
    svg {
        transform: rotateZ(180deg);
    }
    `
    }
`  

export const ResultStyles = styled.div`
    padding-top: 5em;
    text-align: center;
    .results{
        display: flex;
        gap: 1.25em;
        flex-direction: column;
    }
    p:first-child{
        font-size: 2.25em;
        line-height: normal;
        font-weight: 700;
        font-style: normal;
        font-family: Raleway;
    }
    p:nth-child(2){
    font-weight: 700;
    font-style: normal;
    font-family: DM Sans;
    }
    p > span{
        font-size: 2.2em;
        font-weight: 700;
        font-style: normal;
        font-family: Raleway;
        color: #6fcf97;
    }
    .button{
        padding-top: 4.25em;
    }
`