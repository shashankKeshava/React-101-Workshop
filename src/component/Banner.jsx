import React, { Component } from "react";

class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }
  static getDerivedStateFromProps(props, state) {
    return {
      name: props.name
    };
  }
  // state = {
  //   name: "F2E Community"
  // };
  render() {
    return <div>{`Welcome to ${this.state.name}`}</div>;
  }
}

export default Banner;
