/*-------------Arrays-----------------*/
/*-------------string array-----------------*/
let stringArray = [
  "Aravind",
  "kumar",
  "ram",
  "niggy",
  "foster",
  "rocky",
  "twitch",
  "kumar",
];
/*-------------number array-----------------*/
let numberArray = [26, 35, 67, 12, 44, 32, 98, 37];
/*--------------strings-------------------*/
let strings = "jeff has a rock";
/*---------------mutlidimentional array------------------*/
let multiArray = [
  [1, 2, 5],
  [7, 20, 56],
  [45, 6, 3, 887],
];

//Array.prototype.entries()
//Array.prototype.forEach()
/*example--1 */
let forEachIteration = stringArray.forEach((value, index, array) => {
  console.log(`Index-${index}`);
  console.log(`Value-${value}`);
  console.log(`Array-${array}`);
});
//Array.prototype.push()
let pushIteration = numberArray.push(72);
console.log(pushIteration);
//Array.prototype.pop()
let popIteration = numberArray.pop();
console.log(popIteration);
//Array.prototype.unshift()
let shiftIteration = numberArray.unshift(3);
console.log(shiftIteration);
//Array.prototype.shift()
let unshiftIteration = numberArray.shift();
console.log(unshiftIteration);
//Array.prototype.indexof()
let indexofIteration = stringArray.indexOf("ram");
console.log(indexofIteration);
//Array.prototype.lastindexof()
let lastindexofIteration = stringArray.lastIndexOf("kumar");
console.log(lastindexofIteration);
//Array.prototype.join()
//Array.prototype.splice()
let spliceIteration = numberArray.splice(3, 2, 40, 70);
console.log(spliceIteration);
//Array.prototype.map()
let mapIteration = stringArray.map((value, index, array) => {
  console.log(`Index-${index}`);
  console.log(`Value-${value}`);
  console.log(`Array-${array}`);
});
//Array.prototype.filter()
let filterIteration = numberArray.filter((value, index, number) => {
  return value % 2 === 0 && value > 30;
});

console.log(filterIteration);
//Array.prototype.fill()
let fillIteration = numberArray.fill(10, 2, 4);
console.log(fillIteration);
//Array.prototype.findIndex()
let findIndexIteration = stringArray.findIndex((value, index) => {
  return value === "rocky";
});

console.log(findIndexIteration);
//Array.prototype.includes()
let includesIteration = stringArray.includes("foster");
console.log(includesIteration);
//Array.prototype.keys()
//Array.prototype.reverse()
let reverseIteration = numberArray.reverse();
console.log(reverseIteration);
//Array.prototype.sort()
let sortIteration = numberArray.sort();
console.log(sortIteration);
//Array.prototype.toString()
//Array.prototype.reduce()
let reduceIteration = numberArray.reduce(
  (previousValue, currentValue, currentIndex, array) => {
    console.log(`PreviousValue-${previousValue}`);
    console.log(`Currentvalue-${currentValue}`);
    console.log(`Currentindex-${currentIndex}`);
    console.log(`Array-${array}`);
    return currentValue + 2;
  }
);
//Array.prototype.reduceRight()
let reduceRightIteration = numberArray.reduceRight((a, b) => {
  return a + b;
});
console.log(reduceRightIteration);
//Array.prototype.some()
let someIteration = numberArray.some((value) => {
  return value > 79;
});
console.log(someIteration);
//Array.prototype.values()
//Array.prototype.flat()
let flatIteration = multiArray.flat();
console.log(flatIteration);
//Array.prototype.find()
let findIteration = stringArray.find((value, index) => {
  return value === "Aravind";
});
console.log(findIteration);
//Array.prototype.every()
let everyIteration = numberArray.every((value) => {
  return value === 99;
});
console.log(everyIteration);
