const Factorial = (n) => {
  return n === 0 ? 1 : n * Factorial(n - 1);
};
console.log(Factorial(5)); // 120
