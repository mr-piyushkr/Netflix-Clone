import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  //   A snippet of code which runs based on s specific condition/variable

  useEffect(() => {
    // if [], run once when the row loads, and don't run again
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);

      return request;
    }
    fetchData();
  }, [fetchUrl]);
  const opts = {
    height: "600px",
    width: "100%",
    playerVars: {
      //
      autoplay: 1,
    },
  };
  const handleClick = (movie) => {
    // console.log(movie);
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(
        movie?.original_name ||
          movie?.original_title ||
          movie?.title ||
          movie?.name ||
          ""
      )
        .then((url) => {
          console.log("*****" + url);
          const urlPrams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlPrams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };
  //   console.log(movies);
  return (
    <div className="row">
      <h2>{title}</h2>

      <div className={"row__posters"}>
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movies.name}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
