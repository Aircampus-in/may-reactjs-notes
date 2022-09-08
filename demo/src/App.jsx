import React, { Component } from "react";
import { Button } from "./components/Button";
import "./App.css";

export class App extends Component {
  render() {
    console.log(this);
    return (
      <div>
        <h1>Title: {this.props.name} and the bottle of water</h1>
        <p>It is a story of water bottle</p>
        <Button text="Delete" class="delete" />
        <Button text="Save" class="save" />
      </div>
    );
  }
}
