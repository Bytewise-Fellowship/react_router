import { useState } from 'react'
import {Routes,Route,useRoutes} from 'react-router-dom';
import Home from './Home.jsx';
import Contact from './Contact.jsx';
import About from './About.jsx';
import NoPage from './NoPage.jsx';
import Nav from './Nav.jsx';
import Params from './Params.jsx';
import Book from './Book.jsx';
import SearchParams from './SearchParams.jsx';
import ParentBook from './ParentBook.jsx';
import './App.css';
import NewBook from './NewBook.jsx';


function App() {
  let elements = useRoutes([
    {
      path:"/hello",
      children:[
        {
        index:true,
        element:<h3>hello</h3>
        },
        {
          path:"hey",
          element:<h2>hey i am child route of hello</h2>
        }
      ]
    }
  ])

  return (
    <div className='w-100 '>
        <Nav/>
        {elements}
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/params/:id" element={<Params/>}/>
          <Route path="/searchParams" element={<SearchParams/>}/>
          
          <Route path="/book" element={<ParentBook/>}> 
              <Route index element={<Book/>}/>
              <Route path="new" element={<NewBook/>}/>
          </Route>
         
        </Routes>

    </div>
  )
}

export default App
