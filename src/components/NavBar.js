import React from 'react'
import {Link} from "react-router-dom"
import "./Movie.css"

const NavBar = () => {
  return (
    <div className='navigation'>
        <ul>
          <li className='SouhaibMovie'>Souhaib Movies</li>
          <div className='NavList'>
           <Link to="/"><li>Home</li></Link>
           
           <Link to="/movies"><li>Movies List</li></Link>
           
           <Link to="/about"><li>About</li></Link>
          </div>
        </ul>
    </div>
  )
}

export default NavBar