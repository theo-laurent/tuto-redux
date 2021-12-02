import React, { useState } from "react";
//proptypes
import PropTypes from "prop-types";
// css
import "../../styles/header.css";

const Header = ({ searchMovie }) => {
  const [nameMovie, setNameMovie] = useState("");

  // si le champ de recherche est vide on renvoie l'action searchMovie vide
  if (nameMovie.length === 0) {
    searchMovie("");
  }

  return (
    <div className="header">
      <input
        type="text"
        className="header__input"
        placeholder="Rechercher un film"
        name="headerSearch"
        value={nameMovie}
        onChange={(e) => setNameMovie(e.target.value)}
      />
      <button
        type="submit"
        // on lance l'action searchMovie avec la const nameMovie dépendant de l'input
        onClick={() => searchMovie(nameMovie)}
        htmlFor="headerSearch"
        className="header__btn"
      >
        Rechercher
      </button>
    </div>
  );
};

Header.propTypes = {
  searchMovie: PropTypes.func,
};

export default Header;
