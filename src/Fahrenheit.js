import { React, Component } from "react";

class Fahrenheit extends Component {
  render() {
    return <p>Fahrenheit: {(this.props.fahrenheit * 9) / 5 + 32}</p>;
  }
}

export default Fahrenheit;
