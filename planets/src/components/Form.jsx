import React from "react";
export default props => {
  return (
    <div>
      <h1>Submit Your Planet</h1>
      <form>
        <label htmlFor="planet_input">Planet Name</label>
        <input
          type="text"
          id="planet_input"
          name="name"
          value={props.name}
          onChange={props.onChange}
        />
        <label htmlFor="planet_input">Number of Moons</label>
        <input
          type="number"
          id="planet_input"
          name="num_moons"
          onChange={props.onChange}
          value={props.num_moons}
        />
        <label htmlFor="planet_input">Planet Color</label>
        <input
          type="text"
          id="planet_input"
          name="color"
          onChange={props.onChange}
          value={props.color}
        />
        <input type="submit" onClick={props.onSubmit} />
      </form>
    </div>
  );
};
