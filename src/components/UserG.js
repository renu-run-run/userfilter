import React, { useEffect, useState } from "react";

import axios from "axios";
const UserG = () => {
   const [userList , setUserList] = useState([]);
   const [data, setData] = useState([])
   useEffect(()=>{
      axios.get('https://randomuser.me/api/?results=20').then(
        (response)=>{
          setData(response.data.results);
          setUserList(response.data.results);
          console.log(response.data.results);
        }
      )
   },[]);

   const filterData = (cat) => {
    const updatedata = data.filter((x) => x.gender === cat);
    setUserList(updatedata);
   }
    return(
      <>
        <div className="main">
          <h1>Users List</h1>
          <h3>Click on the button </h3>
          
          <button className="button" onClick={() => filterData("male")}>Male</button>&nbsp;&nbsp;
          <button className="button" onClick={() => filterData("female")}>Female</button>&nbsp;&nbsp;
          <button  className="button" onClick={() => setUserList(data)}>All</button>
          
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
             {userList.map((elem, idx)=>{
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

export default UserG