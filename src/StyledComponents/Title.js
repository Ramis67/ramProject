import React from "react";
import styled, { css } from "styled-components";

const StyledTitle = styled.h1`
  font-family: 'Koulen', cursive;
  font-size: 3.8rem;
  font-weight: normal;
  color: white;
  ${props => props.timer && css
    `
    font-size: 3.5rem;
    color:#72C8E6;
    font-weight: normal;
    width:4rem;
  `};
  ${props => props.timerspacer && css
    `
    font-size: 3.5rem;
    color:#72C8E6;
    margin-right:0.5rem;
  `};
`;


export default function Title(props) {
  return <StyledTitle {...props}>{props.children}</StyledTitle>;
}