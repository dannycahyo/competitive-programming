/*
Input: nums1 = [1,1,3,2], nums2 = [2,3], nums3 = [3]
Output: [3,2]
Explanation: The values that are present in at least two arrays are:
- 3, in all three arrays.
- 2, in nums1 and nums2.

Input: nums1 = [1,2,2], nums2 = [4,3,3], nums3 = [5]
Output: []
Explanation: No value is present in at least two arrays.
*/

/*
- Looping through the entire array
- Making condition of a value that exist on another array
- The first condition to check two array
- The second condition to check three array
*/

/*
- Initialize hash tables to save the value of each number on the array
- Looping through the first array
- Save the value into the hash tables
- Looping again to the second array
- Save the value into the hash tables
- Looping again to the second array
- Save the value into the hash tables
*/

const outOfThree = (nums1, nums2, nums3) => {
  // check if arr2/arr3 contains numbers from arr1
  const arr1 = nums1.filter((num) => {
    return nums2.includes(num) || nums3.includes(num);
  });

  console.log(arr1);

  // check if arr1/arr3 contains numbers from arr2
  const arr2 = nums2.filter((num) => {
    return nums1.includes(num) || nums3.includes(num);
  });

  // const arr3 = nums3.filter((num) => {
  //   return nums1.includes(num) || nums2.includes(num);
  // });

  // console.log(arr3);

  console.log(arr2);

  // concat the array and put it into a set as there will be overlapping values, and then return the set into Array form
  return Array.from(new Set(arr1.concat(arr2)));
};

const result = outOfThree([1, 1, 3, 2], [2, 3], [3]);
console.log(result);
