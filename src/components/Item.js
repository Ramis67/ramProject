import React from "react";
import Heading from "../StyledComponents/Heading.js";
import Paragraph from "../StyledComponents/Paragraph.js";

export default function Item(props){

    const {info} = props
    if (!info){
        return null
    }

    return(
        <>
            <Heading>{info.task}</Heading>
            <Paragraph formnote>{info.note}</Paragraph>
        </>
    )
}