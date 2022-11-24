/*
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.
*/

/*
Filter the the array that consist of nums2 value
*/

const intersectionOfTwoArrays = (nums1, nums2) => {
  const interSection = nums1.filter((num) => nums2.includes(num));
  return Array.from(new Set(interSection));
};

console.log(intersectionOfTwoArrays([1, 2, 2, 1], [2, 2]));
