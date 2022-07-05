import React from "react";
import styled from "styled-components";
import { css } from "styled-components";

const StyledUnorderedList = styled.ul`
    display:flex;
    justify-content:flex-start;
    align-items:flex-start;
    flex-direction:row;
    flex-wrap:wrap;
    margin-left:8rem;
    height:90%;
    margin-bottom:4rem;
    ${props => props.currency && css
        `
        width:50%;
        margin-left:0;
        margin-top:0.5rem;
        justify-content:space-around;
        align-items:center;
        flex-wrap:nowrap;
        height:10%;
        margin-bottom:1rem;

        &:hover{
            background-color: #2C664D;
            border-radius: 0.2rem;
            cursor:pointer;
        }
    `};
`

export default function UnorderedList(props){
    return <StyledUnorderedList {...props}>{props.children}</StyledUnorderedList>
}