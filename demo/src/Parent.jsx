import React, { Component } from "react";
import { Child } from "./components/Child";
import { Odd } from "./components/Odd";
import { Even } from "./components/Even";

export class Parent extends Component {
  constructor(props) {
    super(props);

    // initialize the state here
    this.state = {
      parentText: "parent default",
      parentObj: {
        name: "gayatri",
        age: 20,
      },
      count: 0,
      names: ["Julia", "Deepika", "Aishwarya", "Anushka", "Alia", ""],
    };
  }

  changeParentText = () => {
    this.setState({
      parentText: "changed",
    });
  };

  changeCount = () => {
    this.setState((prev) => ({
      count: prev.count + 1,
    }));
  };

  render() {
    console.log("parent");
    return (
      //   <React.Fragment>
      <>
        <h1>This is my parent component - {this.state.parentText}</h1>
        <button onClick={this.changeParentText}>parent</button>
        <button onClick={this.changeCount}>
          increase count - {this.state.count}
        </button>
        {this.state.count % 2 === 0 ? <Even /> : <Odd />}
        {this.state.count > 0 && <p>Count is greater than 0</p>}
        {this.state.names.map(
          (name) =>
            name !== "Alia" && (
              <>
                <p>{name} is a heroine from bollywood</p>
                <h1>This is a bollywood collection</h1>
              </>
            )
        )}
        <Child
          changeParentText={this.changeParentText}
          gayatriObj={this.state.parentObj}
        />
      </>
      //   </React.Fragment>
    );
  }
}
