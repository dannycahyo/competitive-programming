// =================>> Brute Force
const countNegatives = (grid) => {
  let count = 0;

  for (let i = 0; i < grid.length; i++) {
    const element = grid[i];
    for (let j = 0; j < element.length; j++) {
      const value = element[j];
      if (value < 0) {
        count++;
      }
    }
  }

  return count;
};

// ===================>> Another one
const countNegatives2 = (grid) => {
  let result = [];
  let count = 0;
  const len = grid.length;
  for (let i = 0; i < len; i++) {
    result.push(grid[i].filter((x) => x < 0).length);
    console.log(result);
  }

  //   console.log(result);

  for (const negCount of result) {
    // console.log((count += negCount));
    count += negCount;
  }

  return count;
};

// ===========================> Binary Search
const countNegatives3 = function (grid) {
  let count = 0;
  const n = grid.length; // => 3
  const m = grid[0].length; // => 3

  let row = 0;
  while (row < n) {
    let rightIndex = m - 1; // => 2
    let leftIndex = 0;
    while (leftIndex <= rightIndex) {
      const midIndex = leftIndex + Math.floor((rightIndex - leftIndex) / 2);
      if (grid[row][midIndex] >= 0) {
        leftIndex = midIndex + 1;
      } else {
        rightIndex = midIndex - 1;
      }
    }
    count += m - leftIndex;

    ++row;
  }

  return count;
};

const grid = [
  [4, 3, 2, -1],
  [3, 2, 1, -1],
  [1, 1, -1, -2],
  [-1, -1, -2, -3],
];

const result = countNegatives2(grid);

console.log(result);

/*
[[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
Output: 8
Explanation: There are 8 negatives number in the matrix.
*/

/*
Initialize varible for counting
Looping through the array
Save the value of the element
Looping again based on the element
Making condition if the value < 0
If it's true, incremenet the variable by one
Return the variable
*/
