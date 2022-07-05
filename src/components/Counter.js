import React, { useEffect, useState, useRef } from "react";
import Wrapper from "../StyledComponents/Wrapper.js";
import Title from "../StyledComponents/Title.js";
import Button from "../StyledComponents/Button.js";

export default function Counter(){
    let timerRef = useRef(false);
    const [second, setSecond] = useState(0);
    const [minute, setMinute] = useState(0);
  
    useEffect(() => {
      if (second > 59) {
        setMinute((prev) => prev + 1);
      }
    }, [second]);
  
    useEffect(() => {
      if (minute) {
        setSecond(0);
      }
    }, [minute]);
  
    function handleStartClick() {
      if (!timerRef.current) {
        timerRef.current = setInterval(() => {
          setSecond((prev) => prev + 1);
        }, 1000);
      }
    }
  
    function handlePauseClick() {
      timerRef.current = clearInterval(timerRef.current);
      setSecond((prev) => prev);
      setMinute((prev) => prev);
    }
  
    function handleStopClick() {
      timerRef.current = clearInterval(timerRef.current);
      setSecond(0);
      setMinute(0);
    }
  
    return (
      <>
        <Wrapper timer>
          <Wrapper timernumbers>
            <Title timer>{minute}</Title>
            <Title timerspacer>:</Title>
            <Title timer>{second}</Title>
          </Wrapper>
          <Wrapper timerbuttons>
            <Button timerbuttons onClick={handleStartClick}>start</Button>
            <Button timerbuttons onClick={handlePauseClick}>pause</Button>
            <Button timerbuttons onClick={handleStopClick}>stop</Button>
          </Wrapper>
        </Wrapper>
      </>
    );
  }