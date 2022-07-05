import React from "react";
import Item from "./Item.js";
import UnorderedList from "../StyledComponents/UnorderedList.js";
import List from "../StyledComponents/List.js";
import Button from "../StyledComponents/Button.js";

export default function ItemsList(props){
    if(props.items.length > 0){
        return(
            <>
                <UnorderedList>
                    {props.items.map(item =>
                    <List>
                        <Item info={item}/>
                        <Button taskend onClick={() => {props.onDeleteClick(item.id)}}>Завершить</Button>
                    </List>)}
                </UnorderedList>
            </>
        )
    }

    return null
}