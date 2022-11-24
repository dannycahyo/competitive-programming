/*
Input: nums = [1,2,2,1], k = 1
Output: 4
Explanation: The pairs with an absolute difference of 1 are:
- [1,2,2,1]
- [1,2,2,1]
- [1,2,2,1]
- [1,2,2,1]

Input: nums = [1,3], k = 3
Output: 0
Explanation: There are no pairs with an absolute difference of 3.
*/

/*
Looping through the array to get the first value
Looping through the array to get the second value
Make sure & check selisih first value dengan second value  === K
If it's true, we're going to count it
If it's not, nothing
*/

const handleCountNumberOfPairs = (array, k) => {
  let count = 0;

  for (let i = 0; i < array.length - 1; i++) {
    const value = array[i];
    for (let j = i + 1; j < array.length; j++) {
      const valueToCompare = array[j];

      if (Math.abs(value - valueToCompare) === k) {
        count++;
      }
    }
  }

  return count;
};

console.log(handleCountNumberOfPairs([1, 2, 2, 1], 1));
