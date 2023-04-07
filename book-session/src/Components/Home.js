import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");

    const handleClick = (e) => {
      e.preventDefault();
      if(name)
        navigate(`/details/${name}`);
    }
  return (
    <>
       <form className='flex flex-col items-center'>
            <input type="text" autoFocus placeholder='Enter you name...' value={name} onChange={(e) => setName(e.target.value)}/>
            <button type='submit' onClick={handleClick} >Proceed</button>
        </form> 
    </>
  )
}

export default Home;