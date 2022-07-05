import React, { useEffect, useState } from "react"
import {v4} from "uuid"
import Form from "./Form.js"
import ItemsList from "./ItemsList.js"
import Wrapper from "../StyledComponents/Wrapper.js";

export default function ToDoList(){

    const [items, setItems] = useState(() => {
        const localData = localStorage.getItem("items");
        return localData ? JSON.parse(localData) : [];
      })
    const [task, setTask] = useState('')
    const [note, setNote] = useState('')
    const [validate, setValidate] = useState(true)

    useEffect(() => {
        localStorage.setItem("items", JSON.stringify(items))
    }, [items])

    function handleFormSubmit(e){
        e.preventDefault()

        if(!task || !note){
            setValidate(false)
        }
        else{
            setValidate(true)
            setItems([...items, {task, note, id:v4()}])
            setTask('')
            setNote('')
        }
    }

    function handleTaskChange(event){
        setTask(event.target.value)
    }

    function handleNoteChange(event){
        setNote(event.target.value)
    }

    function handleDeleteClick(el){
        return setItems(items.filter(item => item.id !== el))
    }

    return(
        <>
            <Wrapper todolist>
                <Form 
                onFormSubmit={handleFormSubmit} 
                task={task}
                note={note}
                validate={validate}
                onTaskChange={handleTaskChange}
                onNoteChange={handleNoteChange}
                />
                <ItemsList
                items={items}
                onDeleteClick={handleDeleteClick}
                /> 
            </Wrapper>  
        </> 
    )
}