// zero parameter arrow
const return9 = () => 9;
console.log(return9());
// single param arrow
const multiplyBy12 = (num) => num * 12;
console.log(multiplyBy12(5));
//double param arrow
const devideBy4 = (num1, num2) => (num1 + num2) / 4;
console.log(devideBy4(4, 8));
// multiline arrow
const doMath = (num1, num2) => {
  const sum1 = num1 + 5;
  const sum2 = num2 + 5;
  return sum1 * sum2;
};
console.log(doMath(2, 2));
