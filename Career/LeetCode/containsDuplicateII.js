/*
Given an integer array nums and an integer k, 
return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

Input: nums = [1,2,3,1], k = 3
Output: true

Input: nums = [1,0,1,1], k = 1
Output: true

Input: nums = [1,2,3,1,2,3], k = 2
Output: false
*/

// const containsNearbyDuplicate = function (nums, k) {
//   const map = new Map();

//   for (const num of nums) {
//     if (!map.has(num)) {
//       map.set(num, 1);
//     } else {
//       map.set(num, map.get(num) + 1);
//     }
//   }

//   console.log(map);

//   for (const key of map.keys()) {
//     if (map.get(key) > 1 && Math.abs(key - key) <= k) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// };

const containsNearbyDuplicate = function (nums, k) {
  let isValidDuplicateNum = false;

  for (let i = 0; i < nums.length; i++) {
    const firstValue = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      const secondValue = nums[j];
      if (firstValue === secondValue) {
        if (Math.abs(i - j) <= k) {
          isValidDuplicateNum = true;
        }
      }
    }
  }

  return isValidDuplicateNum;
};

console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2));
// console.log(Math.abs(0 - 3));
