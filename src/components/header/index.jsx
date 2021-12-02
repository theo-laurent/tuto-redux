import React, { useState } from "react";
//proptypes
import PropTypes from "prop-types";
// css
import "../../styles/header.css";

const Header = ({ searchMovie }) => {
  const [nameMovie, setNameMovie] = useState("");

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
