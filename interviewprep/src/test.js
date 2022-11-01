// factory method -> mfg object
// function createPerson(name, age, place) {
//   return {
//     name: name,
//     age: age,
//     place: place,
//     display: function () {
//       console.log(this.name, this.age);
//     },
//   };
// }

// let vasanth1 = createPerson("vasanthkumar", 28, "chennai");
// let virat1 = createPerson("virat kohli", 34, "delhi");
// let dhoni1 = createPerson("MS Dhoni", 39, "India");

// constructor method
// class createPerson {
//   constructor(name, age, place) {
//     this.name = name;
//     this.age = age;
//     this.place = place;
//     console.log("this -> ", this);
//   }
// }

// function createPerson(name, age, place) {
//   this.name = name;
//   this.age = age;
//   this.place = place;
//   this.state = {
//     name: "dadas",
//   };
//   console.log("this -> ", this);
// }
// let vasanth1 = new createPerson("vasanthkumar", 28, "chennai");
// console.log(vasanth1);

// let ghost = {
//   name: "ghost",
//   age: 253,
// };

// let ghost1 = {
//   name: "ghost1",
// };

// function display(place) {
//   console.log(
//     `My name is ${this.name} and my age is ${this.age}. Im from ${place}`
//   );
// }

// display.call(ghost, "US");
// display.apply(ghost, ["US"]);
// display.call(ghost1, "India");
// display.apply(ghost1, ["India"]);

// let ghostDisplay = display.bind(ghost, "US");

// ghostDisplay();
// ghostDisplay();
// ghostDisplay();
// ghostDisplay();
// ghostDisplay();
// ghostDisplay();

// let object = {
//   name: "raj",
//   fn: function () {
//     let name = () => {
//       console.log(this);
//     };
//     name();
//   },
// };

// object.fn();

// function name() {
//   const age = 10;
//   const name = "raja";

//   return function () {
//     console.log(age);
//   };
// }

// const displayAge = name();
// displayAge();

// declaration
// let age = 10;
// // re declaration
// // let age = 20
// // re assigning
// age = 20;

// function scopes() {
//   {
//     let age = 20;
//     console.log("inside block", age);
//   }
//   console.log("inside fn", age);
// }
// scopes();
// // console.log("outside fn", age);

// console.log(age);
// let age = 20;
// console.log(age);

// getAge();

// function getAge() {
//   console.log("100");
// }

// var getAge = () => {
//   console.log("100");
// };

// getAge();

// console.log(1);

// setTimeout(() => console.log(2), 1500);

// console.log(3);

// setTimeout(() => console.log(4), 10);

// setTimeout(() => console.log(5), 4000);
// let p = new Promise((res, rej) => res(10));
// p.then((data) => {
//   setTimeout(() => console.log(data), 30000);
// });

// let p = new Promise((res, rej) => {
//   setTimeout(() => {
//     console.log(5);
//     res();
//   }, 6000);
// });

// p.then((data) => {
//   setTimeout(() => {
//     console.log(10);
//   }, 5000);
//   console.log("promise resolved");
// });

// function getfact(a) {
//   return function fact(b) {
//     return function fn(c) {
//       console.log(a + b + c);
//     };
//   };
// }

// getfact(5)(10)(15); // currying

// function getfact(a, b, c) {
//   fact(a, b, c);
// }

// function fact(a, b, c) {
//   fn(a, b, c);
// }

// function fn(a, b, c) {
//   console.log(a + b + c);
// }

// getfact(5, 10, 15);

// prototypical inheritance

// let country = "india";

// String.prototype.upper = function () {
//   return this.toUpperCase();
// };

// console.log(country.upper());

// function printingWrapper() {
//   let count = 1;
//   return function () {
//     if (count % 3 == 0) {
//       console.log("print");
//     }
//     count += 1;
//   };
// }

// let printing = printingWrapper();

// printing();
// printing();
// printing();
// printing();
// printing();
// printing();

// function xyz(arr) {
//   if (arr.length === 1) return arr[0];
//   let latter = arr[0];
//   let substring = "";
//   for (let i = 0; i < latter.length; i++) {
//     let count = 0;
//     for (let j = 0; j < arr.length; j++) {
//       if (latter[i] == arr[j][i]) {
//         count++;
//       } else {
//         return substring;
//       }
//     }
//     if (count == arr.length) {
//       substring += latter[i];
//     }
//   }
// }
// console.log(xyz(["nbkj"]));

// let str = "vasanth";
// let charMap = {};
// for (let i = 0; i < str.length; i++) {
//   if (charMap[str[i]]) {
//     charMap[str[i]] += 1;
//   } else {
//     charMap[str[i]] = 1;
//   }
// }

// console.log(charMap);

function getName(name) {
  if (name === "vasanth") return `My name is ${name}`;
  else return name;
}

let output = getName("vasanth");
let expectedOutput = "My name is vasanth";

if (output === expectedOutput) {
  console.log("passed");
} else {
  throw new Error("Test case failed");
}

let output1 = getName("vasanthkumar");
let expectedOutput1 = "vsanthkumar";

if (output1 === expectedOutput1) {
  console.log("passed");
} else {
  throw new Error("Test case failed");
}
