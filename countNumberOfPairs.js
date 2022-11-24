var countKDifference = function (nums, k) {
  let count = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    const firstValue = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      const secondValue = nums[j];

      if (Math.abs(firstValue - secondValue) === k) {
        count++;
      }
    }
  }

  return count;
};

var countKDifference2 = function (nums, k) {
  let map = {};
  for (let i of nums) {
    map[i] ? map[i]++ : (map[i] = 1);
  }

  console.log(map);

  let pairs = 0;

  for (let i = 0; i < nums.length; i++) {
    console.log(map[nums[i] - k]);
    if (map[nums[i] - k]) {
      pairs += map[nums[i] - k];
    }
  }

  return pairs;
};

const result = countKDifference2([3, 2, 1, 5, 4], 2);
console.log(result);

/*
- Initialize variable for savinng the value, default 0
- Loop through the array to get the value
- Making comparison based on the Key
- Increment the variable
- Return the variable
*/
