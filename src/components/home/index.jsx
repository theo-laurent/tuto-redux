import React from "react";

const Home = ({ getData, movies }) => {
  return (
    <div>
      <h2>Hello from Home</h2>

      <button onClick={() => getData([{ utilisateursConnecter: "michelle" }])}>
        Get Data
      </button>
    </div>
  );
};

export default Home;
