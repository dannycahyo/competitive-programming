var maxProduct = function (nums) {
  let finalNumber = [];

  for (let i = 0; i < nums.length; i++) {
    const firstValue = nums[i] - 1;
    for (let j = i + 1; j < nums.length; j++) {
      const secondValue = nums[j] - 1;
      finalNumber.push(firstValue * secondValue);
    }
  }

  return Math.max(...finalNumber);
};

var maxProduct2 = function (nums) {
  nums.sort((a, b) => b - a);

  const finalNumber = (nums[0] - 1) * (nums[1] - 1);
  return finalNumber;
};

const result = maxProduct2([3, 4, 5, 2]);

console.log(result);

/*
- Initialize empty number
- Double For Loops
- Save the value
- Assign the variable
- Return
*/
