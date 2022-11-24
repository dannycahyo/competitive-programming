/*
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.

Input: nums = [5,4,-1,7,8]
Output: 23

Input: nums = [1]
Output: 1
*/

/*
Looping through the array
Sum Up all of the integer on it
But we have to sum up the largest sum
So we can make some condition for the sum that's < 0 => reset it to 0
Continue to sum up all of the value that still not eliminated
Find the max sum of it
*/

const maximumSubArray = (nums) => {
  let currentSum = 0;
  let maxSum = nums[0];
  //   console.log(maxSum);

  for (let i = 0; i < nums.length; i++) {
    const value = nums[i];
    if (currentSum < 0) {
      currentSum = 0;
    }

    currentSum += value;
    maxSum = Math.max(currentSum, maxSum);
    console.log(maxSum);
  }

  return maxSum;
};

const result = maximumSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
console.log(result);

// console.log(Math.max(5, 6));
