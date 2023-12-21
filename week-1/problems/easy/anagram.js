/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  const formattedStr1 = str1.replace(/\s/g, "").toLowerCase();
  const formattedStr2 = str2.replace(/\s/g, "").toLowerCase();

  // Check if the length of the strings is the same
  if (formattedStr1.length !== formattedStr2.length) {
    return false;
  }

  // Convert strings to arrays, sort them, and compare if they are equal
  const sortedStr1 = formattedStr1.split("").sort().join("");
  const sortedStr2 = formattedStr2.split("").sort().join("");

  return sortedStr1 === sortedStr2;
}

console.log(isAnagram("spar", "rasp"));
module.exports = isAnagram;
