import React, { useState } from 'react'
import Calendar from 'react-calendar';
import { useParams } from 'react-router-dom';
import 'react-calendar/dist/Calendar.css';
import { useNavigate } from 'react-router-dom';
const Details = () => {
    const navigate = useNavigate();
    const {name} = useParams();
    const [dateVal, setDateVal] = useState("");
    const [data,setData] = useState("");
    const [time,setTime] = useState("");
    const [active, setActive] = useState(false);
    const timeSlot = ["08-09","09-10", "10-11", "11-12"];
    const handleChange = (e) => {
        let date = e.getDate()  + '-' + (e.getMonth()+1) + '-' + e.getFullYear();
        let data = "";
        setDateVal(date);
        if(time && date && active === false) {
            setActive(true);
            setData(time + " " + date);
        }
        else {
            setActive(false);
        }
    }
    const handleTime = (e) => {
        const newTime = e.target.value;
        setTime(newTime);
        if(newTime && dateVal && active === false) {
            setActive(true);
            setData(newTime + " " + dateVal);
        }
        else {
            setActive(false);
        }
    }

    const handleSubmit = () => {
        navigate(`/booked/${data}`);
    }

    
  return (
    <>
    <div className='flex h-screen  items-center'>
        <div className='container mx-auto flex gap-2  justify-center'>
            <div className='flex flex-col gap-1 border-r-2 p-4'>
                <h1 className='text-sm text-gray-500 font-bold'>Welcome {name}</h1>
                <h2 className='font-bold text-2xl'>1 Hour Technical Session</h2>
                <p className='text-gray-500 font-bold'>Web conferencing details provided upon confirmation</p>
                <p className='text-gray-500 font-bold'>Pleae ensure a working camera and a good internet connection</p>
            </div>
            <div>
            <div>
                <Calendar onChange={handleChange} value={dateVal}/>
            </div>
            
                <div className='flex gap-2 w-full'>
                    {
                        timeSlot.map((time, index) => (
                            <div key={index}>
                                <button className='p-1 cursor-pointer border-2 text-white bg-gray-500' value={time} onClick={handleTime}>{time}</button>
                            </div>
                        ))
                    }
                

                    {
                        active === true && 
                        <button className='p-1 cursor-pointer border-2 text-white bg-blue-500' onClick={handleSubmit}>Book Session</button>
                    }
                </div>
            </div>
            </div>
            </div>

        

    </>
  )
}

export default Details;