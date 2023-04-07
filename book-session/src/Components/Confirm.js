import React from 'react'
import { useParams } from 'react-router-dom'
const Confirm = () => {
    const {data} = useParams();
    
  return (
    <>
        <h1>Session Booked sucessfully</h1>
        <h2>{data}</h2>
    </>
  )
}

export default Confirm;