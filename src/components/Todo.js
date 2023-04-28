import { useState } from "react";

const Todo = () =>{
    const [items, setItems] = useState([])
    const [newItem, setNewItem] = useState("");
    const Add = () =>{
       
         
      const item = {
        id: Math.floor(Math.random()*1000),
        value:newItem
      }
      setItems(olditem => [...olditem, item]);
      setNewItem("");
    }
    const Del = (id) =>{
      const newarr = items.filter((ele)=> ele.id!==id);
      setItems(newarr);
    }
    return(
        <>
          <input type="text" value={newItem} onChange={e=>{setNewItem(e.target.value)}} placeholder="Enter the task"/>
          <button onClick={()=>Add()}>Add</button>
          <ol>
          {
            items.map((elem,idx)=>{
                return(
                    <li idx={idx}>{elem.value} <button onClick={()=>Del(elem.id)} >❌</button></li>
                )
            })
          }
          
          </ol>
          
        </>
    )
}
export default Todo;