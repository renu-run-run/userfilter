import axios from "axios";
import { useEffect, useState } from "react";

const UserPractice = () => {
    const [userData, setUserData] = useState([]);
    const [search, setSearch] = useState([]);

    useEffect(()=>{
        axios.get('https://randomuser.me/api/?results=20').then(
           (response)=>{
            setUserData(response.data.results);
            console.log(response.data.results)
           }
        )
    },[]);
    return(
        <div>
        <h1> search the User Data</h1>
        <input type="text" onChange={e =>setSearch(e.target.value)} placeholder="Enter Name"/>

        <table>
          <thead>
            <tr>
            <th>Name</th>
            <th>gender</th>
            <th>Email</th>

            </tr>
          </thead>
          <tbody>
          {userData.filter((ele) => {
            if(search === " "){
                return ele
            }else if(ele.id.name.toLowerCase().includes(search)){
                return ele.id.name
            }
          }).map((elem,idx) => {
                return(
                  <tr>
                    <td>{idx + 1}</td>
                    <td>{elem.id.name}</td>
                    <td>{elem.gender}</td>
                    <td>{elem.email}</td>
                  </tr>
                )
                
            })
          }
          </tbody>
        </table>
        
        </div>
    )
}

export default UserPractice;