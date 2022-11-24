/*
Input: nums = [5,6,2,7,4] ==> [2,4,5,6,7]
Output: 34
Explanation: We can choose indices 1 and 3 for the first pair (6, 7) and indices 2 and 4 for the second pair (2, 4).
The product difference is (6 * 7) - (2 * 4) = 34.

Input: nums = [4,2,5,9,7,4,8]
Output: 64
Explanation: We can choose indices 3 and 6 for the first pair (9, 8) and indices 1 and 5 for the second pair (2, 4).
The product difference is (9 * 8) - (2 * 4) = 64.
*/

/*
Sort the array first 
Find the minimum ==> index 0 & 1
Find the maximum ==> the last index & last index -1
*/

// Big O Notation ==> O log n time complexity, O(1) space
const maximumProductDifference = (array) => {
  array.sort((a, b) => a - b);
  const minimumOperation = array[0] * array[1];
  const maximumOperation = array[array.length - 1] * array[array.length - 2];

  const productDifference = maximumOperation - minimumOperation;
  return productDifference;
};

console.log(maximumProductDifference([4, 2, 5, 9, 7, 4, 8]));
