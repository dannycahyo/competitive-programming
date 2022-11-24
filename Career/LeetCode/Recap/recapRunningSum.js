/*
Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

Input: nums = [1,1,1,1,1]
Output: [1,2,3,4,5]
Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
*/

/*
Initialize varible for saving the operation
Looping to sum up the value on the array
Push the result into the array
*/

const recapRunningSum = (nums) => {
  let currentSum = 0;
  let finalArray = [];

  for (const num of nums) {
    currentSum += num;

    finalArray.push(currentSum);
  }

  return finalArray;
};

const result = recapRunningSum([1, 1, 1, 1, 1]);

console.log(result);
