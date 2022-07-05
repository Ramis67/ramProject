import React from "react";
import styled from "styled-components";
import {css} from "styled-components";

const StyledInput = styled.input`
    border: solid 0.1rem #7C859C;
    border-radius: 0.3rem;
    height: 1.8rem;
    width:12rem;
    ::placeholder{
        padding-left:0.5rem;
        color:#A8A5A9;
    }
`

export default function Input(props){
    return <StyledInput {...props}/>
}