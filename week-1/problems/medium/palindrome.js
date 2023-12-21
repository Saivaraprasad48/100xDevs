/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i].toLowerCase();
  }
  console.log(newStr);
  if (str.toLowerCase() == newStr) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome("Nan"));

module.exports = isPalindrome;
