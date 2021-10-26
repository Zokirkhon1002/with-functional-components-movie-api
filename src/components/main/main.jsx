import React, { useState, useEffect } from "react";
import Loader from "./loader";
import Movies from "./Movies";
import Search from "./Search";

export default function Main()  {

  const  [ movies, setMovies ] = useState([]);
  const [ loading, setLoading ] = useState(true);


   const searchMovies = (searchContent, type = 'all') => {
      setLoading(true);
        fetch(`https://www.omdbapi.com/?apikey=34c04d3a&s=${searchContent}${type !== 'all' ? `&type=${type}` : ''}`)
        .then(response => response.json())
        .then((data) => {
          setLoading(false);
          setMovies(data.Search);
        })
    }

    useEffect(() => {
      fetch('https://www.omdbapi.com/?apikey=34c04d3a&s=panda')
      .then(response => response.json())
      .then((data) => {
        setMovies(data.Search);
        setLoading(false);
      });
    }, []) 


    return (
      <div className="container content">
          <Search searchMovies={searchMovies} />
          {loading ? <Loader /> :(<Movies movies={movies}/>)}
        
      </div>
    );
}
