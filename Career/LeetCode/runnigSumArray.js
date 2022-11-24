const runningSum = function (nums) {
  let finalArray = [];
  let currentNum = 0;

  for (let i = 0; i < nums.length; i++) {
    currentNum += nums[i];
    finalArray.push(currentNum);
  }

  return finalArray;
};

const runningSum2 = function (nums) {
  let sum = 0;
  let ans = new Array(nums.length).fill(0);
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    ans[i] += sum;
  }
  return ans;
};

var runningSum3 = function (nums) {
  let len = nums.length;
  let arr = [];
  arr[0] = nums[0];
  for (i = 1; i < len; i++) {
    arr[i] = nums[i] + arr[i - 1];
  }
  return arr;
};

const result = runningSum3([3, 1, 2, 10, 1]);

console.log(result);

/*
Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
*/
