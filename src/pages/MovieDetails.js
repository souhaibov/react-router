import React from 'react'
import Rate from '../components/Rate'
import {useParams} from "react-router-dom"
import "../App.css"
const MovieDetails = ({movies}) => {
    const {cin}=useParams()
    
    const movie=movies.find(el=>el.id===parseInt(cin)) || {}
  return (
    <div>
    <div className="description">
      <div className='trailer'>
           {movie.trailer}  
      <div className="rates">
          <Rate rating={movie.rate} />
        </div>
        </div>
        <br/>
      <p>
        <b style={{ color: "rgb(81, 150, 241)" }}>Description:</b>{" "}
        {movie.description}
      </p>{" "}
      <br />
      <br />
      <div className="watching">
        
        {/* <a href={movie.trailer} target="_blank" rel="noreferrer">    */}
        
         
        {/* </a> */}
        </div>
        </div>
        </div>
  )
}

export default MovieDetails