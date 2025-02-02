const isPlandrome = (str) => {
  return str === str.split("").reverse().join("");
};

console.log(isPlandrome("madam"));
console.log(isPlandrome("hello"));
