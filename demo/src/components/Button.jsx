import React, { Component } from "react";

export class Button extends Component {
  // state
  constructor(props) {
    super(props);
    this.state = {
      text: "submit",
      count: 0,
    };
    // this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    if (this.state.text === "submit") {
      this.setState({
        text: "cancelled",
      });
      console.log(this.state.text);
    } else {
      this.setState({
        text: "submit",
      });
      console.log("else", this.state.text);
    }
  };

  increment = async () => {
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
    // this.setState((prev) => ({
    //   count: prev.count + 1,
    // }));
    // this.setState((prevState) => {
    //   console.log(prevState);
    //   return { count: prevState.count + 1 };
    // });
    // this.setState((prev) => ({
    //   count: prev.count + 1,
    // }));
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
        text: "dhoni",
      };
    });
    this.setState((prevState) => {
      console.log("between", prevState.count, prevState.text);
      return {
        count: prevState.count + 1,
        text: prevState.text + "vasanth",
      };
    });
  };

  render() {
    let { text, btnClass } = this.props;
    // console.log(this.props);
    // console.log("child");
    return (
      <div>
        <h1>{this.state.count}</h1>
        {this.state.text}
        {/* <button onClick={this.props.handleBtnApp} className={btnClass}>
          {text}
        </button> */}
        <button onClick={this.increment}>increment</button>
      </div>
    );
  }
}
