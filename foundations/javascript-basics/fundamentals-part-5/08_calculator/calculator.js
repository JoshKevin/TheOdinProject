const add = function(a, b) {
    return a + b;
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(array) {
	let total = array.reduce((a, b) => {
        return a + b;
    }, 0);
    return total
};
// console.log(sum([3,4,7,7]));

const multiply = function(array) {
    let total = array.reduce((a, b) => {
        return a * b;
    }, 1);
    return total;
};
// console.log(multiply([5,5,5,7]));

const power = function(a, b) {
	return Math.pow(a, b)
};

const factorial = function(n) {
	if (n === 0) return 1;
  let product = 1;
  for (let i = n; i > 0; i--) {
    product *= i;
  }
  return product;
};


console.log(factorial(8));