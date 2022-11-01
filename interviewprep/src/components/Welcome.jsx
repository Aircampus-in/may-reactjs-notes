import React, { Component } from "react";

export class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Vasanth",
    };
  }

  changeName = () => {
    console.log(this);
  };

  render() {
    return (
      <div>
        <h1>Welcome {this.state.name}</h1>
        <button onClick={this.changeName}>click</button>
      </div>
    );
  }
}
