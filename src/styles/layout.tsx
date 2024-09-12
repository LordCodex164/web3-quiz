import {css, styled } from "styled-components";
import { IBgTheme } from "../types/layout";

export const LayoutStyles = styled.main<IBgTheme>`
         display: flex;
         justify-content: center;
         min-height: 100vh;
         overflow-x: hidden;
         background: rgba(86, 93, 234, 0.7);
         position: relative;
    .first,
    .second{
        position: absolute;
        width: 60vw;
        height: 80vh;
        background: #575a89;
        border-radius: 2.06em;
        transition: 3s;
        opacity: 0.3;
        @keyframes moveFirst {
            from {
                top: -10%;
                opacity: 0.5
            }
            to {
                top: -50%;
                opacity: 0.5
            }
        }

        @keyframes moveSecond {
            from {
                top: -30%;
                opacity: 0.5
            }
            to {
                top: 20%;
                opacity: 0.5
            }
        }
    }
    .first{
        animation: moveFirst 5s linear;
        left: 0%;
        left: 6em;
        position: absolute;
        transform: rotate(30deg);
    }
    .second {
        animation: moveSecond 5s linear;
        transform: rotate(30deg);
        position: absolute;
        right: 0%;

    }

    ${(props) => 
     props.color && 
     css`
     background: ${props.color};
     .one,
     .two{
        background: ${props.supcolor};
     }
     `
    } 
`