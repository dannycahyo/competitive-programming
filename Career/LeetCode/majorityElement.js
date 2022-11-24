/*
The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

Input: nums = [3,2,3]
Output: 3

Input: nums = [2,2,1,1,1,2,2]
Output: 2
*/

/*
Initialize hash map
Traverse into the array
Store every number  as a key & count the frequency
Determine the majority element
Looping again through the hash map
Find the key that has frequency > majority element
*/

const findMajorityElement = (nums) => {
  const map = new Map();
  let majorityElement = 0;
  const majorityRule = nums.length / 2;

  for (const num of nums) {
    if (!map.has(num)) {
      map.set(num, 1);
    } else {
      map.set(num, map.get(num) + 1);
    }

    if (map.get(num) > majorityRule) {
      majorityElement = num;
    }
  }

  return majorityElement;
};
// [3,2,3]
/*
res = 3
count = 3
3 === 3 ? 1
5 === 3 ? -1
3 === 3 ? 1
*/
var majorityElement2 = function (nums) {
  let res = 0;
  let count = 0;
  for (let num of nums) {
    if (count === 0) {
      res = num;
    }
    count += num === res ? 1 : -1;
  }
  return res;
};

var majorityElement = function (nums) {
  // store first element to start keeping track of the majority
  // we will only store 1 number at all times does this make my storage O(1) space?
  let storage = {
    number: nums[0],
    count: 1,
  };

  // loop through nums array starting from 2nd el since we stored the first
  // one for loop only so O(n) time?
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === storage.number) {
      // if the current stored number is the el we increment its count
      storage.count++;
    } else {
      // if not we decrement the count of the current stored number
      // since we're looking for the majority number if we get a [1,2,1,2,1] the first four elements will cancel each other out and we'd end up with just the last (fifth) element as the majority
      storage.count--;
      if (storage.count < 0) {
        /*
          if we decrement the count until its negative that means we know that so far there are more other elements than the current stored element and we set the new majority element as the current el we're on with its count as 1
          
          eg: nums = [2,2,1,1,1,2,2]
              the loop would look like this (number, count)
              2, 1
              2, 2
              2, 1
              2, 0
              2, -1 => 1, 1 // up until here (nums[0,5]) 2 was still the majority but this 3rd, 1, made 1 the majority
              1, 0
              1, -1 => 2, 1 // 1 lost majority here (nums[0,7] and 2 reclaims majority
              return 2;
          */

        storage.number = nums[i];
        storage.count = 1;
      }
    }
  }

  return storage.number;
};

console.log(majorityElement2([3, 2, 3]));
