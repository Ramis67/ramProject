import React from "react";
import styled from "styled-components";
import {css} from "styled-components";

const StyledLabel = styled.label`
    font-family: 'Fira Sans', sans-serif;
    font-size: 1rem;
    color:#526C99;
    padding-right:1rem;
`

export default function Label(props){
    return <StyledLabel {...props}></StyledLabel>
}