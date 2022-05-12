import { React, Component } from "react";

class Kelvin extends Component {
  render() {
    return <p>Kelvin: {this.props.kelvin + 273.15}</p>;
  }
}

export default Kelvin;
