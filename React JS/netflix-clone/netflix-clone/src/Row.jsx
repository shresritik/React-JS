import React, { useState, useEffect } from "react";
import axios from "./axios";

import Youtube from "react-youtube";

import "./Row.css";

const imageUrl = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLarge }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailer] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      console.log(request);

      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  console.log(movies);
  const opts = {
    height: "390",
    width: "100%",
    playerVars: { autoplay: 1 },
  };
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailer("");
    } else {
      console.log(movie);
      const tv = /tv\?/;
      const fetchTv = tv.test(fetchUrl);
      console.log("fetchUrl", fetchTv);
      if (!fetchTv) {
        const videoId = axios.get(
          `https://api.themoviedb.org/3/movie/${movie.id}?api_key=3344d013003808e492b44bc4794c9bd8&append_to_response=videos`
        );
        console.log("videoId", videoId.data);
        videoId
          .then((res) => {
            console.log(res.config.url);
            setTrailer(res.data.videos.results[0].key);
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        const videoId = axios.get(
          `https://api.themoviedb.org/3/tv/${movie.id}?api_key=3344d013003808e492b44bc4794c9bd8&append_to_response=videos`
        );
        console.log("videoId", videoId.data);
        videoId
          .then((res) => {
            console.log(res.config.url);
            setTrailer(res.data.videos.results[0].key);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }

    // .catch(error){
    //   console.log(error)
    // }

    // }
    // movieTrailer(
    //   "https://www.youtube.com/watch?v=TcMBFSGVi1c&ab_channel=MarvelEntertainment"
    // )
    //   .then((url) => {
    //     const urlSearch = new URL(url).search;
    //     console.log("this is urlSearch", urlSearch);
    //     const urlParams = new URLSearchParams(urlSearch);
    //     console.log("this is url", urlParams);
    //     setTrailer(urlParams.get("v"));
    //     console.log(url);
    //     // setTrailer(url);
    //   })

    // movieTrailer(movie?.name || "")
    //   .then((url) => {
    //     console.log(movie.name, movie.id);
    //     console.log("url", url);
    //     const urlSearch = new URL(url).search;
    //     console.log("this is urlSearch", urlSearch);
    //     const urlParams = new URLSearchParams(urlSearch);
    //     console.log("this is url", urlParams);
    //     setTrailer(urlParams.get("v"));
    //   })
    // .catch((error) => {
    //   console.log(error.message);
    //   // setTrailer(
    //   //   `https://www.youtube.com/watch?v=TcMBFSGVi1c&ab_channel=MarvelEntertainment`
    //   // );
    //   console.log(
    //     `http://api.themoviedb.org/3/movie/${movie.id}?api_key=3344d013003808e492b44bc4794c9bd8&append_to_response=videos`
    //   );
    // });
  };
  // console.log("This is video key", video.key);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map((movie) => (
          <div key={movie.id} className="movie_body">
            <img
              key={movie.id}
              onClick={() => handleClick(movie)}
              src={`${imageUrl}${
                isLarge
                  ? movie.poster_path
                  : movie.backdrop_path && movie.backdrop_path
                  ? movie.backdrop_path
                  : movie.poster_path
              }`}
              className={`row_poster ${isLarge && "row_posterLarge"}`}
              alt={movie.name || movie.original_title || movie.original_name}
            />
            <h4
              key={movie.name || movie.original_title || movie.original_name}
              className="movie_name"
            >
              {movie.name || movie.title || movie.original_title}
            </h4>
          </div>
        ))}
      </div>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
