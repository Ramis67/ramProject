import React from "react";
import styled from "styled-components";

const StyledForm = styled.form`
    display: flex;
    align-items:flex-end;
    flex-direction:column;
`

export default function FormWrapper(props){
    return <StyledForm {...props}>{props.children}</StyledForm>
}