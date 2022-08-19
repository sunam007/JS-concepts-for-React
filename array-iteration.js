// forEach
// returns each item

const arr1 = [11, 22, 33, 44];
arr1.forEach((item, index) => console.log(item));

// .map()
const arr2 = [...arr1];
const doubled = arr2.map((item) => item * 2);
console.log(doubled);

// .filter()
const ints = [...arr1, 55, 66, 77];
const filteredArr = ints.filter((item) => item % 2 === 0 && item > 30);
console.log(filteredArr);

// .reduce()
const sum = [1, 2, 3, 4].reduce((result, item) => {
  return (result = result + item);
}, 0);
console.log(sum);
const multiple = [1, 2, 3, 4].reduce((result, item) => {
  return (result = result * item);
}, 1);
console.log(multiple);
// .find()
const arr3 = [1, 2, 3, 4, "a", "b", "c"];
const found = arr3.find((item) => item > 1 && item % 2 === 0);
console.log(found);
