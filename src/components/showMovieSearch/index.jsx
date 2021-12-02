import React from "react";
// css
import "../../styles/moviePopular.css";
// uuid
import { v4 as uuidv4 } from "uuid";

const ShowMovieSearch = ({ movieSearch, findMovie }) => {
  return (
    <div className="containerMoviePopular">
      <h2>Les films recherchés</h2>
      <div className="moviePopular">
        {Array.isArray(movieSearch) &&
          movieSearch.map((movie) => {
            return (
              <div
                //func click pour envoyer ID film dans le store
                onClick={() => {
                  findMovie(movie.id);
                }}
                className="moviePopular__card"
                key={uuidv4()}
              >
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
