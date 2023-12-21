/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  count = 0;
  let volwel = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < str.length; i++) {
    if (volwel.includes(str[i])) {
      count += 1;
    }
  }
  return count;
}

console.log(countVowels("sai"));
console.log(countVowels("working as expected"));

module.exports = countVowels;
