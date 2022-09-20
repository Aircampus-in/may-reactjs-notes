import React, { Component } from "react";

export class Names extends Component {
  constructor(props) {
    super(props);
    this.state = {
      names: [
        {
          id: 1,
          name: "abi",
        },
        {
          id: 2,
          name: "amit",
        },
        {
          id: 3,
          name: "anjali",
        },
      ],
    };
  }

  render() {
    // let namesTag = this.state.names.map((name) => <p>{name}</p>);
    // return namesTag;
    console.log(this.props);
    return (
      // <>
      //   <p>{this.state.names[0]}</p>
      //   <p>{this.state.names[1]}</p>
      //   <p>{this.state.names[2]}</p>
      //   <p>{this.state.names[3]}</p>
      // </>
      <>
        {this.state.names.map((name, index) => (
          <p key={index}>{name.name}</p>
        ))}
      </>
      // <>
      //   {this.state.names.map((nameObj) => (
      //     <p key={nameObj.id}>
      //       {nameObj.name} {nameObj.id}
      //     </p>
      //   ))}
      // </>
    );
  }
}

// assignment

// store data in array of objects

// let data = [
//   {
//     user: vasanth,
//     id: 101,
//     msg: "Welcome to dubai",
//     imgUrl: "use dummy img",
//   },
//   {
//     user: vasanth,
//     id: 101,
//     msg: "Welcome to dubai",
//     imgUrl: "use dummy img",
//   },
//   {
//     user: rani,
//     id: 103,
//     msg: "Ate Ice cream",
//     imgUrl: "use dummy img",
//   },
//   {
//     user: rajni,
//     id: 103,
//     msg: "My daughter got divorce hurray !!!",
//     imgUrl: "use dummy img",
//   },
//   {
//     user: vasanth,
//     id: 101,
//     msg: "Welcome to dubai",
//     imgUrl: "use dummy img",
//   },
//   {
//     user: vasanth,
//     id: 101,
//     msg: "Welcome to dubai",
//   },
//   {
//     user: vasanth,
//     id: 101,
//     msg: "Welcome to dubai",
//   },
// ];

// // iterate the data and pass to the feed component

// // feed component design

// // Please make a instagram feed Component
// // store data in array
// // loop the data and pass into the feed component
