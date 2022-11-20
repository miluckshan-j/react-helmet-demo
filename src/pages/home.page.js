import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      Home Page
      <br />
      <Link to="/details">Click to view details page</Link>
    </div>
  );
};

export default Home;
