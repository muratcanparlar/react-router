import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'
function UserDetail() {
  const { topicId } = useParams();
  console.log(topicId)
  const[detail,setDetail]=useState({});
  const[address,setAddress]=useState({});
  useEffect(()=>{
    axios(`https://jsonplaceholder.typicode.com/users/${topicId}`)
    .then((res)=>{
      setDetail(res.data)
    })
  },[topicId])
  return (
    <div>
      <h2>Detay</h2>
      <p>{detail.name}</p>
      <p>{detail.email}</p>
      <p>{detail.phone}</p>
      <p>{detail.website}</p>
     
    </div>
  );
}

export default UserDetail