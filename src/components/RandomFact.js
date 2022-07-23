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
      get(`https://api.chucknorris.io/jokes/random`)
      .then(data => {
      if (data){
        console.log(Object.entries(data))
        setFact(data)
      }
      })
      .catch(error => console.error(error))
  }

    return (
        <>
          <Wrapper fact>
            {Object.entries(fact).map((item) => {if(item[0] === 'value'){
              return(
                <>
                  {
                    <Paragraph>{item[1]}</Paragraph>
                  }
                </>
              )
            }
            })}
            <Button randomfact onClick={handleFactClick}>Показать</Button>
          </Wrapper>
        </>
    )
}