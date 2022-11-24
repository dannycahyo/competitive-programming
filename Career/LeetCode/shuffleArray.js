/*
- Initialize empty array
- Splice the array
- Looping
- Push the value into empty array
*/

var shuffle = function (nums, n) {
  let finalArray = [];

  for (let i = 0; i < n; i++) {
    finalArray.push(nums[i], nums[i + n]);
  }

  return finalArray;
};

const shuffle2 = (nums, n) => {
  const shuffled = new Array(nums.length);
  let j = 0;

  for (let i = 0; i < n; i++) {
    [shuffled[j], shuffled[j + 1]] = [nums[i], nums[n + i]];
    j += 2;
  }

  return shuffled;
};

const result = shuffle([2, 5, 1, 3, 4, 7], 3);

console.log(result); // ==> [2,3,5,4,1,7]
