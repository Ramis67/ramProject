import React from "react";
import styled from "styled-components";
import { css } from "styled-components";

const StyledWrapper = styled.div`
    height:9rem;
    background:#569985;
    display: flex;
    justify-content: center;
    align-items: center;
    ${props => props.primary && css
        `
        height:2rem;
        background:white;
    `};
    ${props => props.fact && css
        `
        background:white;
        flex-direction:column;
        height:20rem;
    `};
    ${props => props.input && css
        `
        height:4rem;
        background:white;
    `};
    ${props => props.textarea && css
        `
        height:100%;
        background:white;
        align-items: flex-start;
        margin-top:1rem;
    `};
    ${props => props.todolist && css
        `
        justify-content: flex-start;
        flex-direction:column;
        background:white;
        margin-top:2rem;
        height:100%;
        width:100%;
    `};
    ${props => props.currency && css
        `
        height:100%;
        width:100%;
        justify-content: flex-start;
        align-items: center;
        flex-direction:column;
        background:white;
        margin-bottom:1rem;
    `};
    ${props => props.date && css
        `
        margin-top:1rem;
        padding-right:12rem;
        height:10%;
        width:25rem;
        justify-content: flex-end;
        align-items: flex-start;
        background:white;
    `};
    ${props => props.infovalute && css
        `
        width:50%;
        height:10%;
        margin-top:1.5rem;
        background:white;
        align-items: flex-start;
        justify-content:space-around;
    `};
    ${props => props.page && css
        `
        height:auto;
        min-height:100vh;
        width:100%;
        background:white;
        display: flex;
        flex-direction: column;
    `};
    ${props => props.main && css
        `
        height:auto;
        background:white;
        display:block;
        width:100%;
        flex-grow:1;
    `};
    ${props => props.footer && css
        `
        display:block;
        width:100%;
        margin-bottom:0;
        magrin-top:auto;
        height:6rem;
    `};
    ${props => props.footerblock && css
        `
        height:6rem;
        background:#7C859C;
    `};
    ${props => props.footerinfo && css
        `
        flex-direction:column;
        justify-content:flex-start;
        background:#7C859C;
        height:5rem;
        margin-left:5rem;
        margin-top:1rem;
    `};
    ${props => props.footersocialmedia && css
        `
        justify-content:space-around;
        background:#7C859C;
        height:3rem;
        width:15rem;
    `};
    ${props => props.timer && css
        `
        height:2rem;
        background:white;
        margin-top:10%;
        flex-direction:column;
    `};
    ${props => props.timernumbers && css
        `
        height:2rem;
        background:white;
    `};
    ${props => props.timerbuttons && css
        `
        background:white;
        margin-top:2rem;
    `};
`;

export default function Wrapper(props){
    return <StyledWrapper {...props}>{props.children}</StyledWrapper>;
}

