/*
An array nums is strictly increasing if nums[i] < nums[i+1] for all 0 <= i < nums.length - 1.

Input: nums = [1,1,1]
Output: 3
Explanation: You can do the following operations:
1) Increment nums[2], so nums becomes [1,1,2].
2) Increment nums[1], so nums becomes [1,2,2].
3) Increment nums[2], so nums becomes [1,2,3].

Input: nums = [1,5,2,4,1]
Output: 14

Input: nums = [8]
Output: 0
*/

const minimumOperations = (nums) => {
  for (let idx = 1; idx < nums.length; idx++) {
    nums[idx] = Math.max(nums[idx - 1] + 1, nums[idx]);
  }

  return nums;
};

var minOperations = function (nums) {
  let ops = 0;
  let prevNum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] <= prevNum) {
      ops += prevNum + 1 - nums[i];
      nums[i] = prevNum + 1;
    }
    prevNum = nums[i];
  }
  return ops;
};
/*
1. if (1 <= 1) Yes ==> 
    0 += 1 + 1 - 1
    Now Ops is 1
    [1, 2, 1]
    prevNum = 2

2. if (1 <= 2) Yes ==>
    1 += 2 + 1 - 1
    Now Ops is 3
    [1, 2, 3]
    prevNum = 3

*/

console.log(minOperations([1, 1, 1]));

var minOperations2 = function (nums) {
  return nums.reduce((acc, curr, index) => {
    const next = nums[index + 1];
    if (curr >= next) {
      const diff = curr - next + 1;
      nums[index + 1] = next + diff;
      acc += diff;
    }
    return acc;
  }, 0);
};

var minOperations3 = function (nums) {
  if (nums.length < 2) return 0;
  let count = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] <= nums[i - 1]) {
      let change = nums[i - 1] - nums[i] + 1;
      count += change;
      nums[i] += change;
    }
  }

  return count;
};

var minOperations4 = function (nums) {
  let len = nums.length;
  let count = 0;
  for (let i = 1; i < len; i++) {
    let diff = nums[i - 1] - nums[i];
    if (diff >= 0) {
      count = count + diff + 1;
      nums[i] = nums[i - 1] + 1;
    }
  }
  return count;
};
