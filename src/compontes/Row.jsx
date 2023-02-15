import React, { useState, useEffect } from "react";
import axios from "../axios";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

function Row(props) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  const baseUrl = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(props.fetchUrl);

      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [props.fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  const handleClick = (movie) => {
    console.log(movie);
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name ||movie?.title || movie?.original_title ||movie?.overview||"")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.error(error));
    }
  };
 
   
  

  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="row_posters">
        {movies.map((movie) => (
          <img
            onClick={() => handleClick(movie)}
            key={movie.id}
            className={`row_poster ${props.isLarge && "row_posterLarge"}`}
            src={`${baseUrl}${
              props.isLarge ? movie.poster_path : movie.backdrop_path
            }`}
            alt={`image of ${movie.title}`}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
