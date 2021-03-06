import React from "react";
export default props => {
  return (
    <div className="form">
      <h1>Submit Your Planet</h1>
      <form>
        <div>
          <label htmlFor="planet_input">Planet Name</label>
          <input
            type="text"
            id="planet_input"
            name="name"
            value={props.name}
            onChange={props.onChange}
          />
        </div>
        <div>
          <label htmlFor="planet_input">Number of Moons</label>
          <input
            type="number"
            id="planet_input"
            name="num_moons"
            onChange={props.onChange}
            value={props.num_moons}
          />
        </div>
        <div>
          <label htmlFor="planet_input">Planet Color</label>
          <input
            type="text"
            id="planet_input"
            name="color"
            onChange={props.onChange}
            value={props.color}
          />
        </div>
        <input
          type="submit"
          className="pretty-button"
          onClick={props.onSubmit}
        />
      </form>
    </div>
  );
};
