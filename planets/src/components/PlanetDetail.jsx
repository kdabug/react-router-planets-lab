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
    // const { planet } = this.props;
    console.log(this.props);
    return (
      <div className="planet-detail">
        <h3>{this.props.planet.name}</h3>
        <button onClick={this.handleShowMoreButton}>Show More</button>
        {this.state.showMore && (
          <div className="more-details">
            <h6>Number of Moons: {this.props.planet.num_moons}</h6>
            <h6>Color: {this.props.planet.color}</h6>
          </div>
        )}
      </div>
    );
  }
}
