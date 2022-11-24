/*
Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
Explanation: The arrays we are merging are [1] and [].
The result of the merge is [1].

Input: nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]
Explanation: The arrays we are merging are [] and [1].
The result of the merge is [1].
Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.
*/

const mergedSortedArray = (nums1, m, nums2, n) => {
  const firstMergedArray = nums1.slice(0, m);
  const secondMergedArray = nums2.slice(0, n);

  const finalArray = [...firstMergedArray, ...secondMergedArray].sort(
    (a, b) => a - b
  );

  return finalArray;
};

const mergedSortedArray2 = (nums1, m, nums2, n) => {
  nums1.splice(m, n, ...nums2);
  nums1.sort((a, b) => a - b);

  return nums1;
};

var merge = function (nums1, m, nums2, n) {
  let lengthOfMergedArray = m + n - 1;
  let nums1Index = m - 1;
  let nums2Index = n - 1;
  while (lengthOfMergedArray >= 0) {
    if (nums1[nums1Index] > nums2[nums2Index] || nums2Index < 0) {
      nums1[lengthOfMergedArray] = nums1[nums1Index--];
    } else {
      nums1[lengthOfMergedArray] = nums2[nums2Index--];
    }
    lengthOfMergedArray--;
  }
};

console.log(mergedSortedArray2([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
