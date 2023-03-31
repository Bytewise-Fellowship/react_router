import React,{useState,useEffect} from 'react'
import { useSearchParams } from 'react-router-dom'
const SearchParams = () => {
    const [searchParams,setSearchParams] = useSearchParams();
    
  return (

    <div>
        <h2>Search Params</h2>
        <div className='my-4'>
            <h2>My name is  : {searchParams.get("name")}</h2>
            <h2>My age is  : {searchParams.get("age")}</h2>
        </div>
       

        
        <button onClick={(e)=>{setSearchParams({age:19,name:"moiz"})}}> click me</button>
    </div>
  )
}

export default SearchParams