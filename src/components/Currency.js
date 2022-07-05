import React, { useState, useEffect } from "react";
import useFetchCurrency from "./useFetchCurrency.js";
import LoaderCurrency from "./LoaderCurrency.js"
import ItemCurrency from "./ItemCurrency.js";
import Wrapper from "../StyledComponents/Wrapper.js"

export default function Currency(){
    const [items, setItems] = useState([]);

    // const {get, loader} = useFetchCurrency;

    useEffect(() => {
        fetch("https://www.cbr-xml-daily.ru/daily_json.js")
        .then(response => response.json())
        .then((data) => {
        if (data) {
          setItems(data);
          console.log(data)
        }
        })
        .catch((error) => console.error(error));
    }, [])

    if (items) {
        return (
          <>
            <Wrapper currency>
              <ItemCurrency info={items} />
            </Wrapper>
          </>
        );
      }
}