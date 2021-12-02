import React, { useEffect } from "react";

const MoviePopular = ({ nom, age, movies, getData }) => {
  console.log(movies);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <div>
      <h2>Hello from Movie Popular</h2>
      <p>Ma data provenant de Home est {nom + age}</p>
      {/* <button onClick={() => getData()}>Get les films populaires </button> */}
    </div>
  );
};

export default MoviePopular;
