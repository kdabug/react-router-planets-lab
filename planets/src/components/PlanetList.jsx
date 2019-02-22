import React from "react";
import PlanetDetail from "./PlanetDetail";

export default props => {
  const { planets } = props;
  return (
    <div className="planet-list">
      <h1>List of Known Zany Planets:</h1>
      <div className="planets">
        {planets.map(planet => (
          <PlanetDetail key={planet.id} planet={planet} />
        ))}
      </div>
    </div>
  );
};
