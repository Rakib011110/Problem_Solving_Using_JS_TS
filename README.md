### **1. Reverse a String**

Write a function to reverse a given string.

**Example:**

```js
Input: "hello";
Output: "olleh";
```

**Hint:** You can use `.split()`, `.reverse()`, and `.join()`, or solve it using a loop.

---

### **2. Check if a String is a Palindrome**

A **palindrome** is a word or phrase that reads the same forward and backward.

**Example:**

```js
Input: "madam";
Output: true;

Input: "hello";
Output: false;
```

**Hint:** Compare the original string with its reversed version.

---

### **3. Find the Largest Number in an Array**

Write a function that takes an array of numbers and returns the largest one.

**Example:**

```js
Input: [3, 7, 2, 9, 5];
Output: 9;
```

**Hint:** Use a loop or `Math.max()` with the spread operator.

---

### **4. Remove Duplicates from an Array**

Given an array, remove duplicate values and return the unique values.

**Example:**

```js
Input: [1, 2, 2, 3, 4, 4, 5];
Output: [1, 2, 3, 4, 5];
```

**Hint:** Use `Set()` or filter the array.

---

### **5. Find the Missing Number in a Sequence**

Given an array of `n` numbers from `1` to `n+1`, find the missing number.

**Example:**

```js
Input: [1, 2, 4, 5, 6];
Output: 3;
```

**Hint:** Use the sum formula `n(n+1)/2` and subtract the sum of the given array.

---

### **6. Count the Occurrences of Each Character in a String**

Write a function that counts how many times each character appears in a string.

**Example:**

```js
Input: "hello"
Output: { h: 1, e: 1, l: 2, o: 1 }
```

**Hint:** Use an object to store counts.

---

### **7. FizzBuzz Problem**

Print numbers from 1 to 100, but:

- Print `"Fizz"` for multiples of 3.
- Print `"Buzz"` for multiples of 5.
- Print `"FizzBuzz"` for multiples of both 3 and 5.

**Example Output:**

```js
1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, 16...
```

---

### **8. Find the First Non-Repeating Character in a String**

Write a function to find the first character that does not repeat in a string.

**Example:**

```js
Input: "aabbcdd";
Output: "c";

Input: "aabb";
Output: null;
```

**Hint:** Use a character frequency map.

---

### **9. Check if Two Strings are Anagrams**

Two strings are **anagrams** if they contain the same letters in different order.

**Example:**

```js
Input: "listen", "silent";
Output: true;

Input: "hello", "world";
Output: false;
```

**Hint:** Sort both strings and compare.

---

### **10. Find the Factorial of a Number**

Write a function to find the factorial of a number.

**Example:**

```js
Input: 5
Output: 120  (5 × 4 × 3 × 2 × 1)
```

**Hint:** Use recursion or a loop.

---

### **11. Find the Longest Word in a Sentence**

Given a sentence, return the longest word.

**Example:**

```js
Input: "The quick brown fox jumped over the lazy dog";
Output: "jumped";
```

**Hint:** Split the sentence into words and compare lengths.

---

### **12. Check if an Array is Sorted**

Write a function that checks whether an array is sorted in ascending order.

**Example:**

```js
Input: [1, 2, 3, 4, 5];
Output: true;

Input: [1, 3, 2, 4, 5];
Output: false;
```

**Hint:** Compare each element with the next one.

---

### **13. Find the Intersection of Two Arrays**

Given two arrays, return the common elements.

**Example:**

```js
Input: [1, 2, 3, 4], [3, 4, 5, 6];
Output: [3, 4];
```

**Hint:** Use `.filter()` and `.includes()` or `Set()`.

---

### **14. Find the Second Largest Number in an Array**

Write a function to find the second largest number in an array.

**Example:**

```js
Input: [10, 20, 4, 45, 99];
Output: 45;
```

**Hint:** Sort the array or use a loop.

---

### **15. Merge Two Sorted Arrays**

Given two sorted arrays, merge them into one sorted array.

**Example:**

```js
Input: [1, 3, 5], [2, 4, 6];
Output: [1, 2, 3, 4, 5, 6];
```

**Hint:** Use two pointers to compare elements.

---

### **16. Find the Maximum Subarray Sum (Kadane’s Algorithm)**

Find the largest sum of a contiguous subarray.

**Example:**

```js
Input: [-2, 1, -3, 4, -1, 2, 1, -5, 4]
Output: 6   (Subarray: [4, -1, 2, 1])
```

**Hint:** Use Kadane’s Algorithm.

---

### **17. Rotate an Array to the Right by K Steps**

Given an array, rotate it `k` times to the right.

**Example:**

```js
Input: [1, 2, 3, 4, 5], (k = 2);
Output: [4, 5, 1, 2, 3];
```

**Hint:** Use slicing or loops.

---

### **18. Convert Roman Numerals to Integer**

Write a function to convert Roman numerals to integers.

**Example:**

```js
Input: "IX";
Output: 9;
```

**Hint:** Use a map to store values.

---

### **19. Find the Number of 1s in the Binary Representation of an Integer**

Given a number, return the count of 1s in its binary form.

**Example:**

```js
Input: 9  (Binary: 1001)
Output: 2
```

**Hint:** Use bitwise operations.

---

### **20. Implement a Debounce Function**

Create a function that limits how often a function can execute.

**Hint:** Use `setTimeout()`.

---

### **How to Use These Questions?**

1. Try to solve the problem first **without looking at the solution**.
2. Use a **pen and paper** to plan your approach.
3. Use JavaScript to implement the solution and **test with multiple cases**.
4. After solving, compare with an **optimized** solution.

Here are **more important JavaScript problem-solving questions** for interviews, continuing from question 21:

---

### **21. Find the GCD (Greatest Common Divisor) of Two Numbers**

Write a function to find the GCD of two numbers using recursion or loops.

**Example:**

```js
Input: 12, 18;
Output: 6;
```

**Hint:** Use the Euclidean algorithm.

---

### **22. Find the LCM (Least Common Multiple) of Two Numbers**

Write a function to find the LCM of two numbers.

**Example:**

```js
Input: 12, 18;
Output: 36;
```

**Hint:** Use the formula `LCM(a, b) = (a * b) / GCD(a, b)`.

---

### **23. Check if a Number is Prime**

Write a function to check if a number is prime.

**Example:**

```js
Input: 7;
Output: true;

Input: 10;
Output: false;
```

**Hint:** A prime number is only divisible by 1 and itself.

---

### **24. Find All Prime Numbers in a Given Range**

Write a function to return an array of all prime numbers between `1` and `n`.

**Example:**

```js
Input: 10;
Output: [2, 3, 5, 7];
```

**Hint:** Use a loop and check each number.

---

### **25. Convert a Number to Binary**

Write a function to convert a decimal number to binary.

**Example:**

```js
Input: 10;
Output: "1010";
```

**Hint:** Use `.toString(2)` or manual division by 2.

---

### **26. Convert a Binary Number to Decimal**

Write a function to convert a binary string to decimal.

**Example:**

```js
Input: "1010";
Output: 10;
```

**Hint:** Use `parseInt(binary, 2)`.

---

### **27. Find the Fibonacci Sequence Up to N Terms**

Write a function to generate Fibonacci numbers up to `n` terms.

**Example:**

```js
Input: 5;
Output: [0, 1, 1, 2, 3];
```

**Hint:** Use recursion or iteration.

---

### **28. Find the Sum of Digits of a Number**

Write a function to calculate the sum of digits of a number.

**Example:**

```js
Input: 123;
Output: 6(1 + 2 + 3);
```

**Hint:** Convert to a string or use a loop.

---

### **29. Find the Factorial of a Number Using Recursion**

Write a function to find the factorial using recursion.

**Example:**

```js
Input: 5;
Output: 120;
```

**Hint:** Use `n * factorial(n-1)`.

---

### **30. Find the Most Frequent Element in an Array**

Write a function to find the most repeated element in an array.

**Example:**

```js
Input: [1, 2, 2, 3, 3, 3, 4];
Output: 3;
```

**Hint:** Use an object to count occurrences.

---

### **31. Merge Two Arrays and Remove Duplicates**

Write a function to merge two arrays and remove duplicate values.

**Example:**

```js
Input: [1, 2, 3], [2, 3, 4];
Output: [1, 2, 3, 4];
```

**Hint:** Use `Set()`.

---

### **32. Find the Missing Letter in an Alphabet Sequence**

Write a function to find the missing letter in a given sequence.

**Example:**

```js
Input: ["a", "b", "c", "e"];
Output: "d";
```

**Hint:** Compare character codes.

---

### **33. Implement a Stack Using an Array**

Write a JavaScript class that implements a stack.

**Hint:** Use `.push()` and `.pop()`.

---

### **34. Implement a Queue Using an Array**

Write a JavaScript class that implements a queue.

**Hint:** Use `.push()` and `.shift()`.

---

### **35. Find the First Repeating Character in a String**

Write a function to find the first repeating character.

**Example:**

```js
Input: "abca";
Output: "a";
```

**Hint:** Use an object to track characters.

---

### **36. Find the Sum of All Elements in an Array**

Write a function to sum all numbers in an array.

**Example:**

```js
Input: [1, 2, 3, 4];
Output: 10;
```

**Hint:** Use `reduce()` or a loop.

---

### **37. Find the Longest Common Prefix in an Array of Strings**

Write a function to find the longest common prefix among an array of words.

**Example:**

```js
Input: ["flower", "flow", "flight"];
Output: "fl";
```

**Hint:** Compare characters in each word.

---

### **38. Generate a Random String of Given Length**

Write a function to generate a random alphanumeric string.

**Example:**

```js
Input: 5;
Output: "aB3dE";
```

**Hint:** Use `Math.random()` and `charCodeAt()`.

---

### **39. Check if a String Contains Only Unique Characters**

Write a function to check if a string has all unique characters.

**Example:**

```js
Input: "hello";
Output: false;
```

**Hint:** Use `Set()`.

---

### **40. Implement a Basic Memoization Function**

Write a function that remembers the previous results of a calculation.

**Hint:** Use an object to store results.

---

### **41. Find the Majority Element in an Array**

A majority element appears more than `n/2` times in an array.

**Example:**

```js
Input: [3, 3, 4, 2, 3, 3, 3];
Output: 3;
```

**Hint:** Use a counter object.

---

### **42. Find the Longest Substring Without Repeating Characters**

Write a function to find the longest substring with unique characters.

**Example:**

```js
Input: "abcabcbb";
Output: 3; // "abc"
```

**Hint:** Use the sliding window technique.

---

### **43. Convert a String to Title Case**

Write a function to capitalize the first letter of every word.

**Example:**

```js
Input: "hello world";
Output: "Hello World";
```

**Hint:** Use `.split()` and `.map()`.

---

### **44. Convert Camel Case to Kebab Case**

Write a function to convert `"camelCase"` to `"kebab-case"`.

**Example:**

```js
Input: "myVariableName";
Output: "my-variable-name";
```

**Hint:** Use regex.

---

### **45. Flatten a Nested Array**

Write a function to flatten an array with nested arrays.

**Example:**

```js
Input: [1, [2, [3, 4], 5], 6];
Output: [1, 2, 3, 4, 5, 6];
```

**Hint:** Use recursion or `.flat(Infinity)`.

---

### **46. Find the Deepest Level in a Nested Object**

Write a function to find the maximum depth of a nested object.

**Hint:** Use recursion.

---

### **47. Find the Intersection of Multiple Arrays**

Write a function to find the common elements in multiple arrays.

**Example:**

```js
Input: [
  [1, 2, 3],
  [2, 3, 4],
  [3, 4, 5],
];
Output: [3];
```

---

### **48. Implement a Custom `map()` Function**

Write your own version of JavaScript's `.map()` function.

---

### **49. Implement a Custom `filter()` Function**

Write your own version of JavaScript's `.filter()` function.

---

### **50. Implement a Debounce Function**

Write a function that prevents a function from being called too often.
