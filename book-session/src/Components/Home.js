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
    <div className='container flex h-screen  items-center justify-center'>
      <div className='flex flex-col gap-10'>
        <h1 className='text-2xl font-bold'>Enter your name and proceed to book a session</h1>
       <form className='flex flex-col items-center gap-2'>
            <input type="text" autoFocus className='h-[40px] w-[250px] p-2' placeholder='Enter you name...' value={name} onChange={(e) => setName(e.target.value)}/>
            <button type='submit' className='p-1 w-20 cursor-pointer border-2 text-white bg-blue-500' onClick={handleClick} >Proceed</button>
        </form>
        </div> 

        </div>
    </>
  )
}

export default Home;