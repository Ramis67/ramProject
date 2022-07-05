import React from "react";
import styled from "styled-components";
import {css} from "styled-components";

const StyledTextarea = styled.textarea`
    border: solid 0.1rem #7C859C;
    border-radius: 0.3rem;
    height: 5rem;
    width: 12rem;
    ::placeholder{
        padding-left:0.5rem;
        color:#A8A5A9;
    }
`

export default function Textarea(props){
    return <StyledTextarea {...props}/>
}