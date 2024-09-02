import { IDropdownItem } from "../redux/dataSlice";

export interface IQuestion {
    id: number;
    question: string;
    img?: string;
    options: IOption[];
    answer: number;
    attemptQuestion?: boolean;
  }

  export interface IEmoji {
    id: number;
    isSelected: boolean;
    color: string;
    supcolor: string;
  }

  
  export interface IOption {
    id: number;
    text: string;
  }
  
  export const Questions: IQuestion[] = [
    {
      id: 1,
      question: "What is the main purpose of Ethereum?",
      options: [
        { id: 1, text: "To create a decentralized internet" },
        { id: 2, text: "To provide a platform for smart contracts" },
        { id: 3, text: "To facilitate cross-border payments" },
        { id: 4, text: "To create digital collectibles" },
      ],
      answer: 2,
    },
    {
      id: 2,
      question: "Who is the founder of Ethereum?",
      options: [
        { id: 1, text: "Vitalik Buterin" },
        { id: 2, text: "Gavin Wood" },
        { id: 3, text: "Charles Hoskinson" },
        { id: 4, text: "Joseph Lubin" },
      ],
      answer: 1,
    },
    {
      id: 3,
      question: "What is Ethereum's native cryptocurrency called?",
      options: [
        { id: 1, text: "Ether" },
        { id: 2, text: "Ethereum Coin" },
        { id: 3, text: "ETH" },
        { id: 4, text: "E-Currency" },
      ],
      answer: 1,
    },
    {
      id: 4,
      question:
        "What programming language is primarily used for writing Ethereum smart contracts?",
      options: [
        { id: 1, text: "JavaScript" },
        { id: 2, text: "Python" },
        { id: 3, text: "Solidity" },
        { id: 4, text: "Rust" },
      ],
      answer: 3,
    },
    {
      id: 5,
      question: "What is the purpose of Ethereum's virtual machine (EVM)?",
      options: [
        { id: 1, text: "To execute smart contracts" },
        { id: 2, text: "To mine Ether" },
        { id: 3, text: "To validate transactions" },
        { id: 4, text: "To secure the blockchain" },
      ],
      answer: 1,
    },
]

export const EmojiList: IEmoji[] = [
  {
    id: 0,
    isSelected: true,
    color: "#575a89",
    supcolor: "rgba(96, 102, 208, 0.7)",
  },
  {
    id: 1,
    isSelected: false,
    color: "#8B0000",
    supcolor: "hsla(0, 90%, 35%,0.7)",
  },
  {
    id: 2,
    isSelected: false,
    color: "#4B0082",
    supcolor: "hsla(275, 90%, 35%, 0.7)",
  },
  {
    id: 3,
    isSelected: false,
    color: "#00008b",
    supcolor: "hsla(240, 100%, 50%,0.7)",
  },
];

export const DropdownList: IDropdownItem[] = [
  { value: 1, $isSelected: true, id: 1 },
  { value: 2, $isSelected: false, id: 2 },
  { value: 3, $isSelected: false, id: 3 },
  { value: 4, $isSelected: false, id: 4 },
  { value: 5, $isSelected: false, id: 5 }
];