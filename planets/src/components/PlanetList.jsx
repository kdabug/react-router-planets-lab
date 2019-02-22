import React from "react";
import PlanetDetail from "./PlanetDetail";

export default props => {
  const { planets } = props;
  return (
    <div className="planet-list">
      <div className="planets">
        {planets.map(planet => (
          <PlanetDetail key={planet.id} planet={planet} />
        ))}
      </div>
    </div>
  );
};
