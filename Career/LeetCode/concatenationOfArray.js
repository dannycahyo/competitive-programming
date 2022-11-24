var getConcatenation = function (nums) {
  let copyArray = [];

  for (let i = 0; i < nums.length; i++) {
    copyArray[i] = nums[i];
    copyArray[i + nums.length] = nums[i];
  }

  return copyArray;
};

const getConcatenation2 = (nums) => {
  return [...nums, ...nums];
};

const getConcatenation3 = (nums) => nums.concat(nums);

console.log(getConcatenation3([1, 2, 1, 2]));
