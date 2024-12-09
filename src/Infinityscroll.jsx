import  axios from 'axios'
import React,{useState, useEffect} from 'react';
export default function Infinityscroll() {
  const[users, setUsers] =  useState([]);
  const Quotes = () =>{

   useEffect(()=>{
    fetch('https://api.javascripttutorial.net/v1/quotes/?page=1&limit=10')
    .then((response) => response.json())
    .then((data) => setUsers(data))
    .catch(error=>console.error('Error fetching :' ,error));
   },[]);

  }

  console.log(users.data);
  
  return (<div>
    {users.map(user=>(
        <div key={user.id}>{user.quote} </div>

    ))}
  </div>

  );
}
