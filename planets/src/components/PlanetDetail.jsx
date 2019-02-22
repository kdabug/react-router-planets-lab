import React, { Component } from "react";

export default class PlanetDetail extends Component {
  constructor() {
    super();
    this.state = {
      showMore: false
    };
    this.handleShowMoreButton = this.handleShowMoreButton.bind(this);
  }
  handleShowMoreButton(e) {
    e.preventDefault();
    this.setState(prevState => ({ showMore: !prevState.showMore }));
  }

  render() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return (
      <div className="planet-detail" style={{ color: `#${randomColor}` }}>
        <h2>{this.props.planet.name}</h2>
        <button className="pretty-button" onClick={this.handleShowMoreButton}>
          {this.state.showMore ? "Show Less" : "Show More"}
        </button>
        {this.state.showMore && (
          <div className="more-details">
            <h3>Number of Moons: {this.props.planet.num_moons}</h3>
            <h3>Color: {this.props.planet.color}</h3>
          </div>
        )}
      </div>
    );
  }
}
