import React from "react";
// css
import "../../styles/movieDetailed.css";
// import barre progressive
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

const MovieDetailed = ({ movie }) => {
  if (movie) {
    let img = "https://image.tmdb.org/t/p/w500/" + movie.poster_path;
    let titre = movie.title;
    //
    var releaseDateObj = new Date(movie.release_date)
    let année = `(${releaseDateObj.getFullYear()})`;
    let dateFr = releaseDateObj.toLocaleDateString();
    let genres = movie.genres.map((element) => {
      return element.name + ", ";
    });
    // calcul durée film
    let heure = Math.floor(movie.runtime / 60);
    let minutes = movie.runtime % 60;
    let durée = heure + "h " + minutes + "m";
    //
    let overview = movie.overview;
    let note = movie.vote_average * 10;

    return (
      <div className="containerMovieDetails">
        <h1>Description</h1>
        <div
          className="containerMovieDetails__background"
          style={{
            backgroundImage: ` url(${img})`,
          }}
        ></div>

        <div className="containerMovieDetails__infos">
          <img src={img} alt="" />
          <div className="containerMovieDetails__infos__txt">
            <div className="containerMovieDetails__infos__title">
              <h1>{titre}</h1>
              <p>{année}</p>
            </div>

            <ul>
              <li className="liNone">{dateFr}</li>
              <li>{genres}</li>
              <li>{durée}</li>
            </ul>

            <div className="divGraphique">
              <div style={{ width: 70 }}>
                <CircularProgressbar
                  value={note}
                  text={note + "%"}
                  styles={buildStyles({
                    pathColor: "#18D07A",
                    textColor: "white",
                    textSize: "25px",
                  })}
                />
                <h3>Note des utilisateurs</h3>
              </div>
            </div>

            <h2>Synopsis</h2>
            <p>{overview}</p>
          </div>
        </div>
      </div>
    );
  } else return <></>;
};

export default MovieDetailed;
