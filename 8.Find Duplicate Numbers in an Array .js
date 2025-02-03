const findDuplicates = (arr) => {
  let seen = new Set();

  let duplicates = new Set();
  for (let num of arr) {
    if (seen.has(num)) {
      duplicates.add(num);
    }
  }
};
