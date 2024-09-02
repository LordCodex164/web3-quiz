import { createSlice } from "@reduxjs/toolkit";
import { DropdownList, EmojiList, IEmoji, Questions } from "../Constants/Constants";
import { RootState } from "./store";

export interface IOption {
    id: number;
    text: string;
  }

export interface IOption {
    id: number;
    text: string;
  }

export interface IQuestion {
    id: number;
    question: string;
    img?: string;
    options: IOption[];
    answer: number;
    attemptQuestion?: boolean;
  }

  interface ISelectedStyle {
    $isSelected: boolean;
  }

  export interface IDropdownItemStyle extends ISelectedStyle {
    $isLast?: boolean;
  }

  export interface IDropdownItem extends IDropdownItemStyle {
    value: number;
    id: number;
  }

  export interface IBgTheme {
    color?: string;
    supcolor?: string;
  }

interface IDataSlice {
    questions: IQuestion[];
    attemptedQuestionsId: number[]  | null;
    hasStarted: boolean | null;
    numberOfQuestionsSelected: number;
    questionNoDropdownlist: IDropdownItem[];
    showQuestionNoList: boolean;
    isQuestionAnswered: boolean;
    totalNumberOfAllQuestions: number;
    emojiList: IEmoji[];
    bgTheme: IBgTheme;
    selectedOption: IOption | null;
    selectedQuestionAnswerId: number | null;
    hasEnded: boolean;
    hasFinishedQuestions: boolean;
    playerScore: number;
    timerState: number;
    playQuizBgSound: boolean;
    playCorrectAnswerSound: boolean;
    playWrongAnswerSound: boolean;
  }
    

const initialState: IDataSlice = {
    emojiList: EmojiList,
    bgTheme: { color: "rgba(86, 93, 234, 0.7)", supcolor: "" },
    attemptedQuestionsId: null,
    hasStarted: false,
    numberOfQuestionsSelected:5,
    questionNoDropdownlist: DropdownList,
    showQuestionNoList: false,
    isQuestionAnswered: false,
    totalNumberOfAllQuestions: Questions.length,
    hasEnded: false,
    hasFinishedQuestions: false,
    playerScore: 0,
    timerState: 10,
    playQuizBgSound: false,
    playCorrectAnswerSound: false,
    playWrongAnswerSound: true,
    selectedOption: null,
    questions: Questions,
    selectedQuestionAnswerId: 0,
};

const generateRandom = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

export const dataSlice = createSlice({
    name: 'dataSlicer',
    initialState,
    reducers: {
    updateActiveEmoji(state, action) {
    const newEmojiList = state.emojiList.map((emoji) => {
        if (emoji.id === action.payload) {
            console.log(emoji.isSelected)
            state.bgTheme = {color: emoji.color, supcolor: emoji.supcolor}
            return {
                ...emoji,
                isSelected: true,
            };
        }
        return {
            ...emoji,
            isSelected: false,
        };
    });
    state.emojiList = newEmojiList   
    },
    toggleQuestionNoList(state) {
        state.showQuestionNoList = !state.showQuestionNoList;
    },
    toggleActiveDropdown(state, action) {
    const newQuestionNoDropdownlist = state.questionNoDropdownlist.map((item) => {
        if(item.id === action.payload) {
            state.numberOfQuestionsSelected = item.value
        return {
            ...item,
            $isSelected: true,
        };
    }
    return {
        ...item,
        $isSelected: false,
    };
    });
    state.questionNoDropdownlist = newQuestionNoDropdownlist;
    },
    setAttemptQuestion (state) {

      let randomId = generateRandom(1, state.totalNumberOfAllQuestions);
      let attemptedQNos = state.attemptedQuestionsId;
      if(attemptedQNos === null) {
          attemptedQNos = [randomId];
          const newQuestions = state.questions.map((question) => {  
            if (question.id === randomId) {
              return {
                ...question,
                attemptQuestion: true,
              };
            }
            return {
                ...question,
                attemptQuestion: false,
            };
          })
          state.questions = newQuestions;
      }
      else {
        if(attemptedQNos.length < state.numberOfQuestionsSelected) {
           while(attemptedQNos.includes(randomId)) {
            randomId = generateRandom(1, state.totalNumberOfAllQuestions);
        }
        attemptedQNos.push(randomId);
        const newQuestions = state.questions.map((question) => {  
            if (question.id === randomId) {
              return {
                ...question,
                attemptQuestion: true,
              };
            }
            return {
                ...question,
                attemptQuestion: false,
            };
          })
          state.questions = newQuestions;
        }
       
          if(attemptedQNos.length - (state.numberOfQuestionsSelected as number) === 0) {
                state.hasFinishedQuestions = true;
          }
      }
        state.attemptedQuestionsId = attemptedQNos;
    },
    setStartQuiz(state, action) {
        state.hasStarted = action.payload;
    },
    setEndQuiz(state, action) {
        state.hasEnded = action.payload;
    },
    setHasAnswered(state) { 
        state.isQuestionAnswered = true;
    },
    resetHasAnswered(state) {  
        state.isQuestionAnswered = false;
    },
    setSelectedOption (state, action) {
        state.selectedOption = action.payload;
    },
    resetQuizState(state) {   
        state.attemptedQuestionsId = null;
        state.hasStarted = false;
        state.isQuestionAnswered = false;
        state.hasFinishedQuestions = false;
        state.timerState = 10;
        state.playQuizBgSound = false;
        state.playCorrectAnswerSound = false;
        state.playWrongAnswerSound = true;
  },
  resetQuizScore(state){
    state.playerScore = 0;
  },
  incrementPlayerScore(state) {
    state.playerScore += 1;
  },
  setHasFinishedQuestions(state, action) {
    state.hasFinishedQuestions = action.payload;
  }
 }
    });

export const {
  updateActiveEmoji, 
  toggleQuestionNoList, 
  toggleActiveDropdown, 
  setAttemptQuestion, 
  setStartQuiz, 
  setEndQuiz,
  setHasAnswered,
  resetHasAnswered,
  resetQuizState,
  resetQuizScore,
  setSelectedOption,
  incrementPlayerScore,
  setHasFinishedQuestions
} = 
  dataSlice.actions;
export const dataSelector = (state: RootState) => state.data;
export default dataSlice.reducer;