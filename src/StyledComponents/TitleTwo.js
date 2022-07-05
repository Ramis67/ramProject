import React from "react";
import styled from "styled-components";
import { css } from "styled-components";

const StyledTitleTwo = styled.h2`
    font-family: 'Fira Sans', sans-serif;
    font-weight:300;
    font-size: 1.1rem;
    color: #317054;
    padding-right:1rem;
    margin:0;
    ${props => props.title && css
        `
        max-width:9rem;
        text-align:center;
    `};
    ${props => props.date && css
        `
        color: #F5B648;
    `};
    ${props => props.rubles && css
        `
        font-size: 0.9rem;
        margin-top:1rem;
    `};
    ${props => props.footertitles && css
        `
        color:#BDF2D6;
        font-size: 1rem;
    `};

`

export default function TitleTwo(props){
    return <StyledTitleTwo {...props}>{props.children}</StyledTitleTwo>
}