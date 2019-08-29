// function add(a, b) {
//   return a + b;
// }

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function multiAdd(numbers) {
  const sum = (acc, curr) => acc + curr;
  return numbers.reduce(sum);
}

module.exports = {
  //   add,
  subtract,
  multiply,
  divide,
  multiAdd
};
