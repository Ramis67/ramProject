import React from "react";
import styled from "styled-components";
import {css} from "styled-components";

const StyledLink = styled.a`
    font-family: 'Fira Sans', sans-serif;
    font-size: 0.9rem;
    color:#ACEBF2;
    text-decoration:none;
`

export default function Link(props){
    return <StyledLink {...props}></StyledLink>
}