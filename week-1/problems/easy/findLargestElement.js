/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
  max_num = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max_num) {
      max_num = numbers[i];
    }
  }
  return max_num;
}
console.log(findLargestElement([3, 7, 2, 9, 1]));

module.exports = findLargestElement;
