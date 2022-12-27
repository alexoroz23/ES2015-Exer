// Refactor to use arrow functions:
// function double(arr) {
//     return arr.map(function(val) {
//       return val * 2;
//     });
//   }

// My attempt:
// function double(arr) {
//     return arr.map((val) => {
//       return val * 2;
//     });
//   }

//  one-liner attempt:
const double = arr => arr.map(val => val * 2);

// Replace ALL functions with arrow functions:

// function squareAndFindEvens(numbers){
//   var squares = numbers.map(function(num){
//     return num ** 2;
//   });
//   var evens = squares.filter(function(square){
//     return square % 2 === 0;
//   });
//   return evens;
// }

// My Solution:
const squareAndFindEvens = numbers => numbers.map(val => val ** 2).filter(square => square % 2 === 0)