import React from "react";
import ReactTooltip from "react-tooltip";
import { v4 } from "uuid";
import UnorderedList from "../StyledComponents/UnorderedList.js";
import TitleTwo from "../StyledComponents/TitleTwo.js";
import Dates from "../data/Dates.js";
import Wrapper from "../StyledComponents/Wrapper.js";
import List from "../StyledComponents/List.js";

export default function ItemCurrency(props) {
  const { info } = props;

  return (
    <>
      <TitleTwo rubles>*Данные представлены в рублях</TitleTwo>
      {Object.entries(info).map(([data, item]) => {
          if (data !== "PreviousURL" && data !== "Valute") {
            return (
              <>
                <Wrapper date>
                    <TitleTwo>{Dates[data]}</TitleTwo>
                    <TitleTwo date>{new Date(item).toLocaleDateString() }</TitleTwo>
                </Wrapper>
              </>
            )
          }else if(data === "Valute"){
            return(
              <>
                <Wrapper infovalute>
                    <TitleTwo title>Обозначение валюты</TitleTwo>
                    <TitleTwo title>Текущая стоимость</TitleTwo>
                    <TitleTwo title>Предыдущая стоимость</TitleTwo>
                    <TitleTwo title>Изменение, %</TitleTwo>
                </Wrapper>
            {Object.entries(item).map(valute => {
            return(
              <>
              <ReactTooltip type="success" place="bottom" />
              <UnorderedList currency data-tip={`${valute[1][`Name`]}`} key={v4()}>
                <List costs>{valute[0]}</List>
                <List costs>{valute[1][`Value`].toFixed(2)}</List>
                <List costs>{valute[1][`Previous`].toFixed(2)}</List>
                <List colored quantity={((valute[1][`Value`]-valute[1][`Previous`])/valute[1][`Previous`]*100)}>{((valute[1][`Value`]-valute[1][`Previous`])/valute[1][`Previous`]*100).toFixed(2)}</List>
              </UnorderedList>
              </>
            )
            })}
          </>
        )}else {
          return null
        }
      })}
    </>
  )
}