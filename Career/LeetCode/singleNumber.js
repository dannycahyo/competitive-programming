/*
Input: nums = [2,2,1]
Output: 1

Input: nums = [4,1,2,1,2]
Output: 4
*/

/*
- Looping through the array 
- Store the value into the hash map
- If the value doesn't exist on hash map, we can give it value = 1
- If the value already exist on hash map. we can increment it with the previous value
- Looping through the hash map
- Return the integer that has value = 1 
*/

const singleNumber = (nums) => {
  let countSingleNumber = 0;
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if (!map.has(element)) map.set(element, 0);
    map.set(element, map.get(element) + 1);
  }

  // console.log(map);

  for (const [key, value] of map) {
    if (map.get(key) === 1) {
      countSingleNumber = key;
    }
  }

  return countSingleNumber;
};

const result = singleNumber([2, 2, 3]);

console.log(result);

// note: a^a = 0
// a^ 0 = a

const singleNumber2 = (nums) => {
  let finalNumber = 0;

  for (const value of nums) {
    finalNumber ^= value;
  }

  return finalNumber;
};

const result2 = singleNumber([4, 1, 2, 1, 2]);

// console.log(result2);
// console.log(6 ^ 2);
