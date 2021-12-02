import React, { useEffect } from "react";
// css
import "../../styles/moviePopular.css";
// uuid v4
import { v4 as uuidv4 } from "uuid";

const MoviePopular = ({ movies, getData, findMovie }) => {
  // appel des films populaires
  useEffect(() => {
    getData();
  }, [getData]);

  useEffect(() => {
    if (Array.isArray(movies) && movies.length && movies[0]?.id) {
      findMovie(movies[0].id);
    }
  }, [movies, findMovie]);

  return (
    <div className="containerMoviePopular">
      <h2>Les films populaires</h2>
      <div className="moviePopular">
        {movies &&
          movies.map((movie, index) => {
            if (index >= 5) return null;
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
                  <p>
                    {new Date(movie.release_date).toLocaleDateString("fr-FR", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default MoviePopular;
