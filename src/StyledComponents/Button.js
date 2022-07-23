import React from "react";
import styled from "styled-components";
import { css } from "styled-components";

const StyledButton = styled.button`
    background: #7C859C;
    width: 9rem;
    height: 2rem;
    border-radius: 0.2rem;
    border-top: 1px solid white;
    border-bottom: 1px solid white;
    border-left: 0.5px solid white;
    border-right: 0.5px solid white;
    font-family: 'Fira Sans', sans-serif;
    font-size: 0.9rem;
    cursor:pointer;
    color: #FFE2D4;

    &:hover{
        background:#526C99;
    };

    ${props => props.randomfact && css
        `
        margin-top:5rem;
    `};
    ${props => props.formsubmit && css
        `
        margin-top:10%;
        width: 7rem;
    `};
    ${props => props.taskend && css
        `
        margin-top:1rem;
        width: 7rem;
        color:#72C8E6;
    `};
    ${props => props.timerbuttons && css
        `
        margin-top:1rem;
        width: 5rem;
        color:#72C8E6;
    `};
`

export default function Button(props){
    return <StyledButton {...props}>{props.children}</StyledButton>
}