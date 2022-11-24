/*
Input:
[1, 2, 3, 5, 6, 8, 9]

Output: 
[1, 4, 9, 25, 36, 64, 81]
*/

const sortedSquaredArray = (array) => {
  const finalArray = [];

  for (const num of array) {
    finalArray.push(num * num);
  }

  return finalArray.sort((a, b) => a - b);
  //   return array.map((num) => num * num).sort((a, b) => a - b);
};

function sortedSquaredArray2(array) {
  let finalArray = new Array(array.length).fill(0);
  let leftPointer = 0;
  let rightPointer = array.length - 1;
  for (let i = array.length - 1; i >= 0; i--) {
    const smallerValue = array[leftPointer];
    const largestValue = array[rightPointer];
    if (Math.abs(smallerValue) > Math.abs(largestValue)) {
      finalArray[i] = smallerValue * smallerValue;
      leftPointer++;
    } else {
      finalArray[i] = largestValue * largestValue;
      rightPointer--;
    }
  }

  return finalArray;
}

console.log(sortedSquaredArray2([1, 2, 3, 5, 6, 8, 9]));
