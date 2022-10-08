import React, { useEffect, useState } from 'react'
import { Link,Routes,Route } from 'react-router-dom';
import UserDetail from './UserDetail'
import axios from 'axios' 
import{getUsers} from '../api'
function  Users() {
 
  const [users,setUsers]=useState([]);  
  useEffect(()=>{
  getUsers().then(res => setUsers(res))
        
},[])
  return (
    <div>
      <h1>Topics</h1>
      <ul>
        {users.map(({ name, id }) => (
          <li key={id}>
            <Link to={`UserDetail/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>

      <hr />

      <Routes>
        <Route path={`UserDetail/:topicId`} element={<UserDetail/>} />
      </Routes>
    </div>
  );
}

export default Users