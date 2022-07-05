import React from "react";
import styled from "styled-components";
import { css } from "styled-components";

const StyledList = styled.li`
    margin: 0.75rem 2.2rem;
    max-width:12rem;
    list-style-type:none;
    ${props => props.costs && css
        `
        margin:0;
        padding-right:2rem;
        font-family: 'Fira Sans', sans-serif;
        font-size: 1.1rem;
        color: #F5B648;
        height:100%;
    `};
    ${props => props.colored && css
        `
        margin:0;
        padding-right:2rem;
        font-family: 'Fira Sans', sans-serif;
        font-size: 1.1rem;
        color: ${props => props.quantity > 0 ? '#2BC28F' : '#FA5035'}
    `};
`

export default function List(props){
    return <StyledList {...props}>{props.children}</StyledList>
}