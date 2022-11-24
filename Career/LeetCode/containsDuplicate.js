/*
Input: nums = [1,2,3,1]
Output: true

Input: nums = [1,2,3,4]
Output: false
*/

/*
Store every number of the array into Hash Map
Looping into the hash map
Check if there is duplicate value
*/

const containsDuplicate = (nums) => {
  const map = new Map();
  let isDuplicateValue = false;

  for (const num of nums) {
    if (!map.has(num)) {
      map.set(num, 1);
    } else {
      isDuplicateValue = true;
    }
  }

  return isDuplicateValue;
};

console.log(containsDuplicate([1, 2, 3, 1]));
