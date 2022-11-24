/*
Input : [-1, -5, -10, -1100, -1100, -1101, -1102, -9001]
Output : True
*/

function isMonotonic(array) {
  let isNonDecreasing = true;
  let isNonIncreasing = true;

  for (let i = 0; i < array.length; i++) {
    if (array[i] < array[i - 1]) isNonDecreasing = false;
    if (array[i] > array[i - 1]) isNonIncreasing = false;
  }

  return isNonIncreasing || isNonDecreasing;
}

console.log(isMonotonic([1, 2]));
// console.log(-10 < -1);
