const fruiuts = ["banana", "apple", "mango"];
/* fruiuts.forEach((fruit) => console.log(fruit));
 */
for (const fruit of fruiuts) {
  console.log(fruit);
}

const points = new Array(40, 60);
console.log(points);

// spread operator to copy an array

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [...arr1];

console.log(arr2, arr1 === arr2);
arr2.push(6);
console.log(arr2);

// using filter
