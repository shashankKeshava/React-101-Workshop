import React, { Component } from "react";
import Button from "../component/button";
import Banner from "../component/Banner";
import Hooks from "../component/hooks";

/* Container is written here */
class App extends Component {
  state = {
    currentTime: new Date().toLocaleTimeString()
  };
  componentDidMount = () => {
    setInterval(() => {
      this.setState({
        currentTime: new Date().toLocaleTimeString()
      });
    }, 1000);
    console.log("Component Mounted");
  };
  render() {
    return (
      <div>
        <h2>JSX</h2>
        <div>JSX is Cool !!! We use ES{5 + 1} in this session</div>
        <br />
        <h2> VDOM </h2>
        <div>The time is {this.state.currentTime}</div>
        <h2>Components</h2>
        <Button />
        <br />
        <br />
        <Banner name="Shashank" />
        <h2>State</h2>
        <div>{this.state.currentTime}</div>
        <h2>React Hooks</h2>
        <Hooks />
      </div>
    );
  }
}

export default App;
