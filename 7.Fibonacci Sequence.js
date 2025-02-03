const fibonacci = (n) => {
  var sequence = [0, 1];

  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
};
console.log(fibonacci(5)); // [0, 1, 1, 2, 3]
