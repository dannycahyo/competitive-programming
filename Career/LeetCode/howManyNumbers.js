/*
Input: nums = [8,1,2,2,3]
Output: [4,0,1,1,3]
*/

var smallerNumbersThanCurrent = function (nums) {
  // const result = nums.map(value => nums.filter((secondValue) => { return value > secondValue }))

  return nums.map((value) => nums.filter((secondValue) => secondValue < value));
};

// const result2 = [8, 1, 2, 2, 3].map((value) =>
//   [8, 1, 2, 2, 3].filter((secondValue) => value > secondValue)
// );

// console.log(result2);

var smallerNumbersThanCurrent2 = function (nums) {
  let count = 0;
  let a = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      console.log(nums[j]);
      if (nums[j] < nums[i]) {
        count++;
      }
    }
    a.push(count);
    count = 0;
  }
  return a;
};

var smallerNumbersThanCurrent3 = function (nums) {
  let numsSortedArray = [...nums].sort((a, b) => a - b); // [1,2,2,3,8]
  const map = new Map();

  numsSortedArray.forEach((elem, index) => {
    if (!map.has(elem)) {
      map.set(elem, index);
    }
  });

  let result = [];
  for (let i = 0; i < nums.length; i++) {
    result[i] = map.get(nums[i]);
  }
  return result;
};

const result = smallerNumbersThanCurrent2([8, 1, 2, 2, 3]);

// Output => [ 4, 0, 1, 1, 3 ]

console.log(result);
