import React from "react";

export default props => {
  const { randomPlanet } = props;

  return (
    <div className="random-planet-detail">
      <h1>The current zaniest planet:</h1>
      <h5>{randomPlanet.name}</h5>
      <h6>Number of Moons: {randomPlanet.num_moons}</h6>
      <h6>Color: {randomPlanet.color}</h6>
      <button className="pretty-button" onClick={props.onButton}>
        Change Zaniest Planet
      </button>
    </div>
  );
};
