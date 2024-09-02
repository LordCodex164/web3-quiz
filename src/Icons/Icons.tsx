import { FunctionComponent } from "react";
import { ArrowStyles } from "../styles/main";

export interface ISelected {
    isSelected: boolean;
  } 

export const Arrow: FunctionComponent<ISelected> = ({ isSelected }) => {
    return (
      <ArrowStyles $isSelected={isSelected}>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="vuesax/linear/arrow-up">
            <g id="vuesax/linear/arrow-up_2">
              <g id="arrow-up">
                <path
                  id="Vector"
                  d="M16.6004 12.5418L11.1671 7.10845C10.5254 6.46678 9.47539 6.46678 8.83372 7.10845L3.40039 12.5418"
                  stroke="#7D26CD"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </g>
          </g>
        </svg>
      </ArrowStyles>
    );
  };

export const Tick = () => {
    return (
      <svg
        width="15"
        height="12"
        viewBox="0 0 15 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.16675 5.99967L5.33341 10.1663L13.6667 1.83301"
          stroke="green"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  };

  
