import React, { useEffect, useState } from "react";
import axios from "axios";
const UserP = () => {

    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(()=>{ 
        axios.get('https://randomuser.me/api/?results=20').then((response) => {
             setData(response.data.results);
            console.log(response.data.results);
        })
    },[] )
    return(
     <>
     <input type="text" onChange={e => setSearch(e.target.value)} placeholder="name"/>
       {data.filter((elem) => {
        if(search===" ")
        return elem
        else if(elem.id.name.toLowerCase().includes(search))
        return elem
       }).map((ele) =><h1>{ele.id.name}</h1>)}
     </>
    )
}

export default UserP;