/*
Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
Output: 8
Explanation: There are 8 negatives number in the matrix.

Input: grid = [[3,2],[1,0]]
Output: 0
*/

/*
- Looping through the array 
- Save the value of each index on it
- Looping through the array one more time
- Now we can get acces to the number
- Make sure to check every number in the array that less than 0
- If it's true, then we gonna count it
*/

const countNegativeNumber = (nums) => {
  let negativeNumber = 0;

  for (const arrayValue of nums) {
    for (const numberValue of arrayValue) {
      if (numberValue < 0) {
        negativeNumber++;
      }
    }
  }

  return negativeNumber;
};

const nums = [
  [4, 3, 2, -1],
  [3, 2, 1, -1],
  [1, 1, -1, -2],
  [-1, -1, -2, -3],
];

const result = countNegativeNumber(nums);

console.log(result);
