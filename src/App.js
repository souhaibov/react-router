import "./App.css";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import { useState } from "react";
import Rate from "./components/Rate";
import Data from './components/Data'
import About from "./pages/About";
import Home from "./pages/Home";
import {Routes,Route} from "react-router-dom"
import NavBar from "./components/NavBar";
import MovieDetails from "./pages/MovieDetails";


function App() {
  const [text, settext] = useState("");
  const [movies,setMovies]=useState(Data); 

  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/movies" element={<MovieList text={text} movies={movies} />}/>
          <Route path="/film/:cin" element={ <MovieDetails movies={movies}/>}/>


          <Route path="*" element={<h1>404 not found</h1>}/>
        </Routes>
        {/* </div> */}
      </header>
      <div className="footer">
        <h4> © Copyright 2022 © Created By Souh@ibov. All Rights Reserved </h4>
      </div>
    </div>
  );
}

export default App;
