import React from "react";

export default props => {
  const { planet } = props;

  return (
    <div className="planet-detail">
      <h5>{planet.name}</h5>
      <h6>Number of Moons: {planet.num_moons}</h6>
      <h6>Color: {planet.color}</h6>
    </div>
  );
};
