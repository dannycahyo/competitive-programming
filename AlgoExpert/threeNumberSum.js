/*
Input :
    Array => [12, 3, 1, 2, -6, 5, -8, 6]
    Target Sum => 0
Output :
    Array [ [-8, 2, 6], [-8, 3, 5], [-6, 1, 5] ]
*/

/*
Brute force approach
3 Nested for Loop
Making conditon if array[i] + array[j] + array[k] === targetSum
Push to the new array 
*/

const threeNumberSum = (array, targetSum) => {
  const finalArray = [];

  for (let i = 0; i < array.length; i++) {
    const firstValue = array[i];
    for (let j = i + 1; j < array.length; j++) {
      const secondValue = array[j];
      for (let k = j + 1; k < array.length; k++) {
        const thirdValue = array[k];
        const operation = firstValue + secondValue + thirdValue;

        if (operation === targetSum) {
          finalArray.push(
            [firstValue, secondValue, thirdValue].sort((a, b) => a - b)
          );
        }
      }
    }
  }

  return finalArray;
};

/*

*/

const threeNumberSum2 = (array, targetSum) => {
  array.sort((a, b) => a - b); // [-8, -6, 1, 2, 3, 5, 6, 12]

  const tripletsSum = [];

  for (let i = 0; i < array.length - 2; i++) {
    let value = array[i];
    let left = i + 1;
    let right = array.length - 1;

    while (left < right) {
      const currentSum = value + array[left] + array[right];
      if (currentSum === targetSum) {
        tripletsSum.push([value, array[left], array[right]]);
        left++;
        right--;
      } else if (currentSum < targetSum) {
        left++;
      } else if (currentSum > targetSum) {
        right--;
      }
    }
  }

  return tripletsSum;
};

console.log(threeNumberSum2([12, 3, 1, 2, -6, 5, -8, 6], 0));
