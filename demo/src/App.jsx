import React, { Component } from "react";
import { Button } from "./components/Button";
import "./App.css";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Delete",
      count: 0,
    };
  }

  handleBtnApp = () => {
    this.setState((prev) => ({
      text: "Submit",
    }));
  };

  increment = () => {
    // asynchronous process
    // this.setState(
    //   {
    //     count: this.state.count + 1,
    //   },
    //   () => {
    //     // callback fn
    //     console.log(this.state.count);
    //   }
    // );
    this.setState((prev) => ({
      count: prev.count + 1,
    }));
    this.setState((prevState) => {
      console.log(prevState);
      return { count: prevState.count + 1 };
    });
    this.setState((prev) => ({
      count: prev.count + 1,
    }));
  };

  render() {
    console.log("parent");
    return (
      <div>
        <h1>Title: {this.props.name} and the bottle of water</h1>
        <p>It is a story of water bottle</p>
        <p>Parent count = {this.state.count}</p>
        <button onClick={this.increment}>parent</button>
        {/* <Button
          text={this.state.text}
          handleBtnApp={this.handleBtnApp}
          btnClass="delete"
        /> */}
        <Button text="Save" btnClass="save" />
      </div>
    );
  }
}
