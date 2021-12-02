import React from "react";
// css
import "../../styles/moviePopular.css";
// uuid
import { v4 as uuidv4 } from "uuid";

const ShowMovieSearch = ({ movieSearch }) => {
  console.log(movieSearch);
  return (
    <div className="containerMoviePopular">
      <h2>Les films populaires</h2>
      <div className="moviePopular">
        {Array.isArray(movieSearch) &&
          movieSearch.map((movie) => {
            return (
              <div className="moviePopular__card" key={uuidv4()}>
                <div>
                  <img
                    alt=""
                    src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
                  />
                  <h3>{movie.title}</h3>
                  <p>{movie.release_date}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ShowMovieSearch;
