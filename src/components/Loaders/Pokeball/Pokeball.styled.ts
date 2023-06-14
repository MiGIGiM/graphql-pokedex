import styled, { keyframes } from "styled-components";

const shake = keyframes`
  0% {
    transform: translate(0, 0) rotate(0);
  }
  20% {
    transform: translate(-10px, 0) rotate(-20deg);
  }
  30% {
    transform: translate(10px, 0) rotate(20deg);
  }
  50% {
    transform: translate(-10px, 0) rotate(-10deg);
  }
  60% {
    transform: translate(10px, 0) rotate(10deg);
  }
  100% {
    transform: translate(0, 0) rotate(0);
  }
`;

const blink = keyframes`
  from {
    background: #eee;
  }
  to {
    background: #e74c3c;
  }
`;

export const StyledPokeball = styled.div`
    position: relative;
    width: 150px;
    height: 150px;
    background: #fff;
    border: 5px solid #000;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: inset -10px 10px 0 10px #ccc;
    animation: ${shake} 1.25s cubic-bezier(.36,.07,.19,.97) infinite;

    &::before,
    &::after {
        content:"";
        position: absolute;
    }

    &::before {
        background: red;
        width: 100%;
        height: 50%;
    }

    &::after {
    top: calc(50% - 5px);
    width: 100%;
    height: 10px;
    background: #000;
  }
`

export const PokeballButton = styled.button`
    position: absolute;
    top: calc(50% - 15px);
    left: calc(50% - 15px);
    width: 30px;
    height: 30px;
    background: #fff;
    border: 4px solid #7f8c8d;
    border-radius: 50%;
    z-index: 10;
    box-shadow: 0 0 0 7px black;
    animation: ${blink} .5s alternate infinite;
  `;
