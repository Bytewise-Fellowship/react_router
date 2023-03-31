import React from 'react'
import {  useNavigate } from 'react-router-dom'

const Contact = () => {
    const navigate = useNavigate();
    function submit(e){
        e.preventDefault();
        navigate("/")
    }
  return (
    <div>
        <form >
        <input type="email" placeholder='enter your email' />
        <input type="text" placeholder="enter message"/>
        <div className='flex justify-between w-1/4 my-4  mx-auto'>
            <button onClick={(e)=>{submit(e)}}>
                Submit
            </button>
            <button onClick={(e)=>{e.preventDefault();navigate(-1);}}>
                go back
            </button>
        </div>
        
       </form>
    </div>
  )
}

export default Contact