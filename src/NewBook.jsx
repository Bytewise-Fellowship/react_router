import React from 'react'
import { useOutletContext } from 'react-router-dom' 
const NewBook = () => {
    const obj = useOutletContext();
  return (
    <div>
        <h2>New Book</h2>
        <span>{obj.category}</span>
    </div>
  )
}

export default NewBook