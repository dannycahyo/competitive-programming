/*
Input :
[7, 6, 4, -1, 1, 2]

targetSum : 16

Output:
[[7,6,4,-1], [7,6,1,2]]
*/

/*
Making four for loops
And check every possibility into the targetSum
If Match just return it
*/

// Brute force approach
const fourNumberSum = (array, targetSum) => {
  const finalArray = [];

  for (let idx = 0; idx < array.length; idx++) {
    const firstValue = array[idx];
    for (let jdx = idx + 1; jdx < array.length; jdx++) {
      const secondValue = array[jdx];
      for (let kdx = jdx + 1; kdx < array.length; kdx++) {
        const thirdValue = array[kdx];
        for (let lmx = kdx + 1; lmx < array.length; lmx++) {
          const fourValue = array[lmx];

          const potentialMatch =
            firstValue + secondValue + thirdValue + fourValue === targetSum;

          if (potentialMatch)
            finalArray.push([firstValue, secondValue, thirdValue, fourValue]);
        }
      }
    }
  }

  return finalArray;
};

/*
[7, 6, 4, -1, 1, 2]
Sorting the array ==> [-1, 1, 2, 4, 6, 7]
Initialize four pointer 
    * firstPointer from index 0 => (-1)
    * secondPOinter from index 1 => (1)
    * thirdPoiner from the last index => (7)
    * four pointer from the last index - 1 => (6)
Making condition 
    - If all of the operation is match with the targetSum ==> Just return
    - If all of the operation is less than the targetSum ==> We move first and

*/

// Optimize Solution
const fourNumberSum2 = (array, targetSum) => {
  const allPairSums = {};
  const quadruplets = [];

  for (let i = 1; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      const currentSum = array[i] + array[j];
      const difference = targetSum - currentSum;

      if (difference in allPairSums) {
        for (const pair of allPairSums[difference]) {
          quadruplets.push(pair.concat([array[i], array[j]]));
        }
      }
    }
    for (let k = 0; k < i; k++) {
      const currentSum = array[i] + array[k];

      if (!(currentSum in allPairSums)) {
        allPairSums[currentSum] = [[array[k], array[i]]];
      } else {
        allPairSums[currentSum].push([array[k], array[i]]);
      }
    }
  }
  return quadruplets;
};

console.log(fourNumberSum2([7, 6, 4, -1, 1, 2], 16));
