import React from "react"
import App from "./App";
export function ItemList (props) {
    const {title, items, onIncrement, onDecrement, onReset} = props;
    return (
        <div>
        {items.map(item=>(
            <div className="container"
                key={item.id}><fieldset><legend>{item.title}</legend>{item.value}</fieldset>
                <button onClick={()=>onIncrement(item.id)}>+</button>
                <button onClick={()=>onDecrement(item.id)}>-</button>
                <button onClick={()=>onReset(item.id)}>Reset</button>
            </div>
        ))}</div>
    )
   }