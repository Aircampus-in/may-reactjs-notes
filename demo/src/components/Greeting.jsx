import React, { Component } from "react";

export class Greeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true,
    };
  }

  getWelcomeMsg = () => {
    let welcomeMessage = <p>Please login</p>;
    if (this.state.isLoggedIn) {
      welcomeMessage = (
        <>
          <p>Welcome Anish</p>
          <p>dnakldkal</p>
        </>
      );
    }

    return welcomeMessage;
  };

  render() {
    //     if (this.state.isLoggedIn) {
    //       return (
    //         <>
    //           <h2>Welcome to Aircampus</h2>
    //           <p>Welcome Anish</p>
    //           <p>This is our first class</p>
    //         </>
    //       );
    //     } else {
    //       return (
    //         <>
    //           <h2>Welcome to Aircampus</h2>
    //           <p>Please login</p>
    //           <p>This is our first class</p>
    //         </>
    //       );
    //     }
    //   }

    // let welcomeMessage;
    // if (this.state.isLoggedIn) {
    //   welcomeMessage = (
    //     <>
    //       <p>Welcome Anish</p>
    //       <p>dnakldkal</p>
    //     </>
    //   );
    // } else {
    //   welcomeMessage = <p>Please login</p>;
    // }

    return (
      <>
        <h2>Welcome to Aircampus</h2>
        {this.getWelcomeMsg()}
        <p>This is our first class</p>
      </>
    );
  }
}
