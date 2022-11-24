/*
Input: nums = [0,1,2,3,4], index = [0,1,2,2,1]
Output: [0,4,1,3,2]
Explanation:
nums       index     target
0            0        [0]
1            1        [0,1]
2            2        [0,1,2]
3            2        [0,1,3,2]
4            1        [0,4,1,3,2]

Input: nums = [1,2,3,4,0], index = [0,1,2,3,0]
Output: [0,1,2,3,4]
Explanation:
nums       index     target
1            0        [1]
2            1        [1,2]
3            2        [1,2,3]
4            3        [1,2,3,4]
0            0        [0,1,2,3,4]
*/

/*
Initialize empty array
Traverse both the array
Change the value of the array based on given index
*/

// function arraymove(arr, fromIndex, toIndex) {
//   var element = arr[fromIndex];
//   arr.splice(fromIndex, 1);
//   arr.splice(toIndex, 0, element);
// }

const createTargetArray = (nums, index) => {
  for (let idx = 0; idx < nums.length; idx++) {
    const element = nums[idx];

    // Change the index & delete the last element
    nums.splice(idx, 1);
    // Replace the index with the new one
    nums.splice(index[idx], 0, element);
  }

  return nums;
};

const createTargetArray2 = (nums, index) =>
  nums.reduce((acc, num, i) => {
    acc.splice(index[i], 0, num);
    return acc;
  }, []);

const createTargetArray3 = function (nums, index) {
  let targetArray = [],
    counter = 0;

  index.forEach((indexValue) => {
    targetArray.splice(indexValue, 0, nums[counter]); // index, deleted, insert
    counter++;

    /*
      1. targetArray ==> index ke 0, nums[0] (0). Finally [0]
        Counter is 1 right now
      2. targetArray ==> index ke 1, nums[1] (1). Finally [0, 1]
        Counter is 2 right now
      3. targetArray ==> index ke 2, nums[2] (2). Finally [0, 1, 2]
        Counter is 3 right now
      4. targetArray ==> index ke 2, nums[3] (3). Finally [0, 1, 3, 2]
        Cuunter is 4 right now
      5. targetAray ==> index ke 1, nums[4] (4). Finally [0, 4, 1, 3, 2] 
    */
  });

  return targetArray;
};

console.log(createTargetArray3([0, 1, 2, 3, 4], [0, 1, 2, 2, 1]));
