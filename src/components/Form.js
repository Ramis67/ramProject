import React from "react";
import { useNavigate } from "react-router-dom";
import FormWrapper from "../StyledComponents/FormWrapper.js";
import Wrapper from "../StyledComponents/Wrapper.js";
import Input from "../StyledComponents/Input.js";
import Label from "../StyledComponents/Label.js";
import Textarea from "../StyledComponents/Textarea.js";
import Button from "../StyledComponents/Button.js";
import Heading from "../StyledComponents/Heading.js";

export default function Form(props){

    return(
        <>
            <FormWrapper onSubmit={props.onFormSubmit}>
                <Wrapper input>
                    <Label>Добавить задачу</Label>
                    <Input type="text"
                    placeholder="task"
                    className="textfield"
                    value={props.task}
                    onChange={props.onTaskChange}
                    id="nameOfTask"
                    />
                </Wrapper>
                <Wrapper textarea>
                    <Label>Добавить заметку</Label>
                    <Textarea type="textarea"
                    placeholder="note"
                    className="textfield"
                    value={props.note}
                    onChange={props.onNoteChange}
                    id="nameOfNote"/>
                </Wrapper>
                <Button formsubmit>Добавить</Button>
                {!props.validate && <Heading validate>Заполните поле ввода</Heading>}
            </FormWrapper>
            
        </>
    )
}