import React from "react";
import styled from "styled-components";
import {css} from "styled-components";

const StyledHeading = styled.h2`
  font-family: 'Varela Round', sans-serif;
  font-size: 1.3rem;
  font-weight: normal;
  color: #265769;
  ${props => props.validate && css
    `
    font-family: 'Fira Sans', sans-serif;
    font-size: 1.1rem;
    color:#F57E79;
    margin-top:1.5rem;
  `};
`;

export default function Heading(props) {
  return <StyledHeading {...props}>{props.children}</StyledHeading>;
}