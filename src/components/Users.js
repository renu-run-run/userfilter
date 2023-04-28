import React, { useEffect, useState } from "react";

import axios from "axios";
const Users = () => {
   const [userList , setUserList] = useState([]);
   const [search, setSearch] = useState([]);
   useEffect(()=>{
      axios.get('https://randomuser.me/api/?results=20').then(
        (response)=>{
          setUserList(response.data.results);
          console.log(response.data.results);
        }
      )
   },[]);
    return(
      <>
        <div className="main">
          <h1>Users List</h1>
          <input type="text" placeholder="search your username" onChange={(e) => setSearch(e.target.value)}/>
          
          <table className="list-group">
            <thead>
             <tr className="list-group-item">
              <th className="p-4">#</th>
              <th className="p-4">Name</th>
              <th className="p-4">Gender</th>
              <th className="p-4">Email</th>
              
             </tr>
            </thead>
            <tbody>
             {userList.filter((elem) => {
              if(search === " "){
                return elem
              }else if(elem.id.name.toLowerCase().includes(search)){
                return elem.id.name
              }
            }).map((elem, idx)=>{
              return(
                <tr className="list-group-item" key={idx}>
                  <td className="p-3">{idx + 1}</td>
                  <td  className="p-3">
                    <img src={elem.picture.large} alt="p"/>
                  </td>
                  <td  className="p-3">
                    <h4>{elem.id.name}</h4>
                  </td>
                  <td  className="p-3">
                    <h4>{elem.gender}</h4>
                  </td>
                  <td  className="p-3">
                    <h4>{elem.email}</h4>
                  </td>
                </tr>
              )
             })}
             
            </tbody>
          </table>
        </div>
      
      </>
    )
}

export default Users