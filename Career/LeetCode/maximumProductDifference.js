const maxProductDifference = (nums) => {
  nums.sort((a, b) => a - b);
  const length = nums.length;
  return nums[length - 1] * nums[length - 2] - nums[0] * nums[1];
};

const nums = [4, 2, 5, 9, 7, 4, 8];

const result = maxProductDifference(nums);

console.log(result);
