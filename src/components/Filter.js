import React, { useState } from 'react'
import './Movie.css'

const Filter = ({settext,movies,setMovies}) => {

  const [show, setShow] = useState(false);
const [newmovie, setnewmovie] = useState({title:"",posterURL:"",description:"", url:""})
  return (
    <div className='field'>
       <div>
        <button className="button" onClick={() => setShow(!show)}>Add a new movie</button>
        {show ? (
          <div>
            <div id="form" class="topBefore">
              <input type="text" placeholder="Title" onChange={(e) => setnewmovie({ ...newmovie, title: e.target.value })} />
              <input type="text" placeholder="poster"  onChange={(e) => setnewmovie({ ...newmovie,poster: e.target.value })}/>
              <input type="text" placeholder="URL" onChange={(e) => setnewmovie({ ...newmovie, url: e.target.value })} />
              <textarea
                id="message"
                type="text"
                placeholder="description"onChange={(e) => setnewmovie({ ...newmovie, description: e.target.value })}
              ></textarea>
              <button id="submit" onClick={()=>setMovies([...movies,newmovie])}>
                Add the movie
              </button>
            </div>
          </div>
        ) : null}
      </div>
      <p>Search... <input onChange={(e)=>settext(e.target.value)}/></p>
    </div>
  )
}

export default Filter