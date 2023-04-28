import React, { useState } from "react";

const Todoapp = () => {
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState("");
    const ADD =() => {
        const item = {
            id: Math.floor(Math.random()*100),
            value: newItem
         }
        setItems((oldList) => [...oldList, item]);
        setNewItem("");
    }
    const Delete = (id) => {
       const arr =  items.filter(item => item.id!== id);
       setItems(arr);
    }
    return(
        <>
        <input type="text" value={newItem} placeholder="enter the task" onChange={e => setNewItem(e.target.value)}/>
        <button onClick={()=>ADD()}>Add</button>
          <ul>
          {
            items.map((element) => {
                return <li>{element.value} <button onClick={()=>Delete(element.id)}>Delete </button></li>
            })
        }
          </ul>
       
        </>
        
    )
}
export default Todoapp;