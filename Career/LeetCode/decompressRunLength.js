/*
Input: nums = [1,2,3,4]
Output: [2,4,4,4]
Explanation: The first pair [1,2] means we have freq = 1 and val = 2 so we generate the array [2].
The second pair [3,4] means we have freq = 3 and val = 4 so we generate [4,4,4].
At the end the concatenation [2] + [4,4,4] is [2,4,4,4].

Input: nums = [1,1,2,3]
Output: [1,3,3]
*/

/*
Making hash map to store every value on the array
    * Key is going to be from freq
    * Value is going to be from val
After Finishing Store Every Element
{ 1: 2, 3: 4 }
Looping through the hash map
And make the array based on the key & value
Spread the array become one
*/

// const arr = new Array(3).fill(3);
// console.log(arr);

const decompressRunLength = (array) => {
  const map = new Map();

  for (let idx = 0; idx < array.length; idx += 2) {
    map.set(array[idx], array[idx + 1]);
  }

  console.log(map);

  let emptyArray = [];

  for (const [key, value] of map) {
    emptyArray.push(new Array(key).fill(value));
  }

  console.log(emptyArray);

  let finalArray = [];
  for (const value of emptyArray) {
    finalArray.push(...value);
  }

  return finalArray;
};

const decompressRunLength2 = (nums) => {
  let out = [];
  for (let i = 0; i, i < nums.length - 1; i += 2) {
    out = [...out, ...Array(nums[i]).fill(nums[i + 1])];
  }
  return out;
};

const decompressRunLength3 = function (nums) {
  const decompressedList = [];

  for (let i = 0; i < nums.length; i += 2) {
    for (let j = 0; j < nums[i]; j++) {
      console.log([i]);
      decompressedList.push(nums[i + 1]);
    }
  }

  return decompressedList;
};

console.log(decompressRunLength([1, 1, 2, 3]));
