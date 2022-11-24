/*
Input: nums = [-1,-2,-3,-4,3,2,1]
Output: 1
Explanation: The product of all values in the array is 144, and signFunc(144) = 1

Input: nums = [1,5,0,2,-3]
Output: 0
Explanation: The product of all values in the array is 0, and signFunc(0) = 0

Input: nums = [-1,1,-1,1,-1]
Output: -1
Explanation: The product of all values in the array is -1, and signFunc(-1) = -1
*/

/*
Multiply all of the value
If the result is >= 1 ==> Return 1
If the result is === 0 ==> Return 0
If the result is < 0 ==> Return - 1
*/

const signOfAnProductArray = (nums) => {
  if (nums.includes(0)) return 0;
  const acumlationOfArray = nums.reduce((acc, cur) => acc * cur, 1);

  return Math.sign(acumlationOfArray);
};

var arraySign = function (nums) {
  if (nums.includes(0)) return 0;
  return nums.filter((item) => item < 0).length % 2 === 0 ? 1 : -1;
};

console.log(arraySign([-1, -2, -3, -4, -1, 3, 2, 1]));
