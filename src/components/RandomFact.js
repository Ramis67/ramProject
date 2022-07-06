import React from "react";
import { useState } from 'react';
import useFetchRandomFact from './useFetchRandomFact.js';
import Button from "../StyledComponents/Button.js";
import Paragraph from "../StyledComponents/Paragraph.js";
import Wrapper from "../StyledComponents/Wrapper.js";

export default function RandomFact(props){
    const [fact, setFact] = useState([]);
    

    const { get } = useFetchRandomFact();

  function handleFactClick(){
      get(`https://numbersapi.com/random/date`)
      .then(data => {
      if (data){
        setFact(data)
      }
      })
      .catch(error => console.error(error))
  }

    return (
        <>
          <Wrapper fact>
            <Paragraph>{fact}</Paragraph>
            <Button randomfact onClick={handleFactClick}>Показать</Button>
          </Wrapper>
        </>
    )
}