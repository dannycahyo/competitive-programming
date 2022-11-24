/*
A lucky number is an element of the matrix such that it is the minimum element in its row and maximum in its column.

Input: matrix = [[3,7,8],[9,11,13],[15,16,17]]
Output: [15]
Explanation: 15 is the only lucky number since it is the minimum in its row and the maximum in its column

Input: matrix = [[1,10,4,2],[9,3,8,7],[15,16,17,12]]
Output: [12]
Explanation: 12 is the only lucky number since it is the minimum in its row and the maximum in its column.

Input: matrix = [[3,6],[7,1],[5,2],[4,8]]
Output: []
Explanation: There is no lucky number.
*/

/*
Traverse into the array to make sure we get every column 
Find minimum element of every single column
Get the maximum of all of minimum element
Get to know the index of the maximum of all of minimum element
Compare if the minimum element is > all of the value except its element ==> It's a valid luckyNumber
If it's not, simply we're going to return []
*/

const luckyNumberInMatrix = (matrix) => {
  let finalArray = [];
  let maxOfAllMinValue = 0;
  let maxAllOfMaxValue = 0;

  for (const array of matrix) {
    maxOfAllMinValue = Math.max(Math.min(...array));
  }

  for (const array of matrix) {
    maxAllOfMaxValue = Math.max(Math.max(...array));
  }

  //   let idx = matrix[i].indexOf(min)

  if (maxOfAllMinValue < maxAllOfMaxValue) {
    finalArray.push(maxOfAllMinValue);
  } else {
    finalArray = [];
  }

  return finalArray;
};

var luckyNumbers = function (matrix) {
  let res = [];
  for (let i = 0; i < matrix.length; i++) {
    // Get all of minimum value of the array
    let min = Math.min(...matrix[i]);
    // console.log(min);
    // Get the index of the minimum value
    let idx = matrix[i].indexOf(min);
    console.log(idx);

    // Making comparison for
    if (
      matrix.every((array) => {
        // console.log(array[idx]);
        return array[idx] <= min;
      })
    ) {
      res.push(min);
    }
  }
  return res;
};

const luckyNumbers2 = (matrix) => {
  let minValsInRow = [];

  for (let i = 0; i < matrix.length; i++) {
    let ar = matrix[i];
    minValsInRow.push(Math.min(...ar));
  }

  console.log(minValsInRow);

  let minValsInCol = [];

  for (let i = 0; i < matrix.length; i++) {
    let arr = [];
    for (let j = 0; j < matrix.length; j++) {
      arr.push(matrix[j][i]);
    }
    console.log("arr", arr);
    minValsInCol.push(Math.max(...arr));
  }

  console.log(minValsInCol);

  let res = [];

  for (let i = 0; i < minValsInCol.length; i++) {
    if (minValsInRow.includes(minValsInCol[i])) {
      res.push(minValsInCol[i]);
    }
  }

  return res;
};

console.log(
  luckyNumbers2([
    [3, 7, 8],
    [9, 11, 13],
    [15, 16, 17],
  ])
);
