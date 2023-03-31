import React from 'react'
import {NavLink,Link,useLocation} from 'react-router-dom';

const Nav = () => {
  const location = useLocation();
  return (
    <div className='flex justify-between items-center mx-auto my-4 w-1/2'>
        <Link replace to='/'>Home</Link>
        <NavLink to='/contact' state="contact">Contact</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/params/1'>Params</NavLink>
        <NavLink to='/searchParams'>SearchParams</NavLink>
        <NavLink end to='/book'>Book</NavLink>    
        <NavLink  reloadDocument to='/book/new'>new book</NavLink>   

        <div>
          {console.log(location)}
        </div>     
    


    </div>
  )
}

export default Nav