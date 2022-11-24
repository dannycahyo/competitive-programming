/*
Input: nums = [12,345,2,6,7896]
Output: 2
Explanation: 
12 contains 2 digits (even number of digits). 
345 contains 3 digits (odd number of digits). 
2 contains 1 digit (odd number of digits). 
6 contains 1 digit (odd number of digits). 
7896 contains 4 digits (even number of digits). 
Therefore only 12 and 7896 contain an even number of digits.

Input: nums = [555,901,482,1771]
Output: 1 
Explanation: 
Only 1771 contains an even number of digits.
*/

/*
- Looping through the array 
- Making condition for the even number of digits
- Find how to count the number of digits of number
- Check if it's event or not
    * If true, we gonna count it
- Return
*/

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

console.log(digitCount(1771));

// if (4 % 2 === 0) {
//   console.log("This is even");
// } else {
//   console.log("This is odd");
// }

const findNumberWithEvenDigits = (nums) =>
  nums.map(String).filter((num) => num.length % 2 === 0).length;

const result = findNumberWithEvenDigits([12, 345, 2, 6, 7896]);

console.log(result);
