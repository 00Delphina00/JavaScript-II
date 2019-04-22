// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/
// function  function1Name(parameter1, parameter2, callback){
// variable stores a value from the argument and/or
// callback(value);     passes the value into the other function that's entered as an argument
// }
// const  function2Name = (input) =>{
// run this code on (input)
// }
// function1Name(argument 1, argument2, callback);   enters the values and pushes it into callback

 const displayLength = (length) => {
     console.log(`Array Length Is ${length}`);
  }
function getLength(arr, callback) {
  const length = arr.length;
  callback(length);
 // getLength passes the length of the array into the callback.
  }
  getLength(items,displayLength);


  
function last(arr, callback) {
  let lastIndex = arr.length -1;
  callback(arr[lastIndex]);
  // last passes the last item of the array into the callback.
}
 const displayLast = (lastItem)=>{
  console.log(`The Last Item Is ${lastItem}`);
}
last(items,displayLast);

function sumNums(x, y, callback) {
  let sum = x + y;
  callback(sum);
  // sumNums adds two numbers (x, y) and passes the result to the callback.
}
const displaySum = (sum) =>{
  console.log(`The Sum Is ${sum}`);
}
sumNums(1,2,displaySum);

/*
function multiplyNums(x, y, cb) {
  let product = x*y;
  return product;
  // multiplyNums multiplies two numbers and passes the result to the callback.
}
console.log(multiplyNums(2,4));

function contains(item, list, cb) {
       cb(list);
       if (list === item){
         return true;
       } else {return false;}
   }
   contains('Pencil', items, forEach();
*/

  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.


/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
