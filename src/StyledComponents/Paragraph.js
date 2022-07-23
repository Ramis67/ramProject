import React from "react";
import styled from "styled-components";
import {css} from "styled-components";

const StyledParagraph = styled.p`
    font-family: 'Varela Round', sans-serif;
    font-size: 1.2rem;
    color: #265769;
    margin-top:5rem;
    margin-left:2rem;
    height:5rem;
    ${props => props.formnote && css
        `
        max-width:11rem;
        font-size: 1.1rem;
        color:#2A3361;
        margin:0;
        height:2rem;
    `};
`

export default function Paragraph(props){
    return <StyledParagraph {...props}>{props.children}</StyledParagraph>
}