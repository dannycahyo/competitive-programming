/*
Input: nums = [1,2,3,3]
Output: 3

Input: nums = [2,1,2,5,3,2]
Output: 2

Input: nums = [5,1,5,2,5,3,5,4]
Output: 5
*/

/*
Traverse into the array
Then store every number with hash map & count the frequency
    { 1: 1, 2: 1, 3: 2 }
Looping into the hash map
Find the key that has value > 1
*/

const nRepeatedArray = (nums) => {
  const map = new Map();

  for (const num of nums) {
    if (!map.has(num)) map.set(num);
    else return num;
  }
};

var repeatedNTimes = function (nums) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    if (!map[nums[i]]) {
      const element = nums[i];
      map[element] = true;
    } else {
      return nums[i];
    }
  }
};

var repeatedNTimes2 = function (nums) {
  var map = new Map();
  for (i of nums) {
    console.log(i);
    if (!map.has(i)) map.set(i);
    else return i;
  }
};

console.log(nRepeatedArray([5, 1, 5, 2, 5, 3, 5, 4]));
