/*
Given a sorted array of distinct integers and a target value, return the index if the target is found. 
If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

Input: nums = [1,3,5,6], target = 5
Output: 2

Input: nums = [1,3,5,6], target = 2
Output: 1
*/

/*
Pseudo Code


*/

var searchInsert = function (nums, target) {
  const newArray = [...nums];
  const result = nums.indexOf(target);

  if (result === -1) {
    newArray.push(target);
    newArray.sort((a, b) => a - b);
    return newArray.indexOf(target);
  } else return result;
};

const searchInsert2 = function (nums, target) {
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    let mid = ~~(low + (high - low) / 2);
    if (nums[mid] > target) {
      high = --mid;
    } else if (nums[mid] < target) {
      low = ++mid;
    } else return mid;
  }
  return low;
  //   let left = 0;
  //   let right = nums.length - 1;

  //   while (left <= right) {

  //     // if (nums[mid] === target) {
  //     //   return mid;
  //     // } else if (nums[mid] < target) {
  //     //   left++;
  //     //   if (nums[mid] - 1 !== nums[mid - 1]) {
  //     //     return mid;
  //     //   } else continue;
  //     // } else if (nums[mid] > target) {
  //     //   right--;
  //     // } else {
  //     //   return mid;
  //     // }
  //   }

  //   return left;
};
console.log(searchInsert2([1, 3, 5, 6], 4));
