/*
Input: nums = [2,2,1]
Output: 1

Input: nums = [4,1,2,1,2]
Output: 4
*/

/*
Looping thorugh the array 
Store the number as a key and count the frequency
Looping through the hash map that we created
Looking for the key that counted 1 or has value 1
*/

// Big O Notation ===> O(n) time & O(n) space
const findSingleNumber = (array) => {
  const map = new Map();
  let singleNumber = 0;

  for (const num of array) {
    if (!map.has(num)) {
      map.set(num, 1);
    } else {
      map.set(num, map.get(num) + 1);
    }
  }

  for (const [key, value] of map) {
    if (value === 1) {
      singleNumber = key;
    }
  }

  return singleNumber;
};

console.log(findSingleNumber([4, 1, 2, 1, 2]));
