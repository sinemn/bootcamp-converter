import { React, Component } from "react";
import Title from "./Title";
import Kelvin from "./Kelvin";
import Fahrenheit from "./Fahrenheit";
import Celcius from "./Celcius";
import "./App.css";

class Show extends Component {
  constructor(props) {
    super(props);
    this.state = { degree: 0 };
    this.plusOne.bind(this);
  }

  plusOne() {
    this.setState((state) => {
      return { degree: state.degree + 1 };
    });
  }

  render() {
    return (
      <div>
        <div>
          <h1>Hava Nasıl</h1>
          <p>Şu an sıcaklık: {this.state.degree} derece</p>
          <button className="button" onClick={() => this.plusOne()}>
            Sıcaklık Arttır
          </button>
        </div>
        <div className="container">
          <Title />
          <div className="degreeContainer">
            <Celcius celcius={this.state.degree} />
            <Fahrenheit fahrenheit={this.state.degree} />
            <Kelvin kelvin={this.state.degree} />
          </div>
        </div>
      </div>
    );
  }
}

export default Show;
