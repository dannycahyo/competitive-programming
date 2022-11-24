const twoSum = function (nums, target) {
  nums.sort((a, b) => a - b);

  let leftPointer = 0;
  let rightPointer = nums.length - 1;

  while (leftPointer < rightPointer) {
    const currentSum = nums[leftPointer] + nums[rightPointer];
    if (currentSum === target) {
      return [leftPointer, rightPointer];
    } else if (currentSum < target) {
      leftPointer++;
    } else if (currentSum > target) {
      rightPointer--;
    }
  }

  return [];
};

const nums = [2, 7, 11, 15];

// console.log(nums.sort((a, b) => a - b));

console.log(twoSum(nums, 9));
