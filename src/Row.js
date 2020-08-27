import React, { useState, useEffect } from "react";
import axios from "./axios"; // where we created the axios helper.
import "./Row.css";
// import Youtube from "react-youtube";
// import movieTrailer from "movie-trailer";

const imageBaseUrl = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  //   const [trailerUrl, setTrailerUrl] = useState("");

  // code snippet that runs based on a specific condition
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]); // fetchUrl has to be included because it is a variable that is required by useEffect.
  // since the brackets are blank, we mean 'Load once once the row loads and dont repeat'
  // But if we were to put it as [movies], it would reload every time movie state changes.

  //   const opts = {
  //     height: "390",
  //     width: "100%",
  //     playerVars: {
  //       autoplay: 1,
  //     },
  //   };

  //   const handleClick = (movie) => {
  //     if (trailerUrl) {
  //       setTrailerUrl("");
  //     } else {
  //       movieTrailer(movie?.name || "")
  //         .then((url) => {
  //           // to get the specific youtube video url
  //           const urlParams = new URLSearchParams(new URL(url).search);
  //           setTrailerUrl(urlParams.get("v"));
  //         })
  //         .catch((error) => console.log(error));
  //     }
  //   };
  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {movies.map((movie) => {
          return (
            <img
              key={movie.id}
              //   onClick={() => handleClick(movie)}
              src={`${imageBaseUrl}${
                isLargeRow ? movie.poster_path : movie.poster_path
              }`}
              alt={movie.name}
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            />
          );
        })}
      </div>
      {/* {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />} */}
    </div>
  );
}

export default Row;
