import React, { Component } from "react";

export class Button extends Component {
  render() {
    return <button className={this.props.class}>{this.props.text}</button>;
  }
}
