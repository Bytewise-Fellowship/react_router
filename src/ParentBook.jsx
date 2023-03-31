import React from 'react'
import { Outlet } from 'react-router-dom'

const ParentBook = () => {
  return (
    <div>
      <h2>Parent Book</h2>
      <Outlet context={{category:"books of students"}}/>
    </div>
  )
}

export default ParentBook