import React from 'react'
import MovieCard from './MovieCard'


const MovieList = ({text,movies}) => {

  
  return (
    <div>
    
      <div>
      {movies?.filter((el)=>el.title.toUpperCase().includes(text.toUpperCase())).map((data,i)=>(
              <MovieCard key={i} movie={data}/>
          ))} 
      </div>
      
      
    </div>
  )
}

export default MovieList