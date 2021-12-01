import React from "react";

const MoviePopular = ({ nom, age, getData }) => {
  return (
    <div>
      <h2>Hello from Movie Popular</h2>
      <p>Ma data provenant de Home est {nom + age}</p>
      <button onClick={() => getData("rien")}>Get les films populaires </button>
    </div>
  );
};

export default MoviePopular;
