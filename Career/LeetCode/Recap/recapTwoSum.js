/*
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].

Input: nums = [3,2,4], target = 6
Output: [1,2]
*/

/*
[2,7,11,15]  =>> 9
===> First Looping
- Iterasi pertama => 2,
- Iterasi kedua => 7
- Interasi ketiga => 11

===> Second Looping
- Iterasi pertama => 7
- Iterasi kedua => 11
- Iterasi ketiga => 15
*/

// =============> Brute Force

const twoSumRecap = (nums, targetSum) => {
  let finalArray = [];

  for (let i = 0; i < nums.length - 1; i++) {
    const firstValue = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      const secondValue = nums[j];
      if (firstValue + secondValue === targetSum) {
        finalArray.push(i, j);
      }
    }
  }

  return finalArray;
};

const result = twoSumRecap([2, 7, 11, 15], 9);

// console.log(result);

/*
- Sort the array ===> [2,3,4,5,7,9,12]
- Initialize both pointer, 
    the first one we're going to start from index 0  => 2
    the second one we're going to start from index terakhir dari array ==> 12
- Do while loop
    1. index 0 (2) for left pointer, index terakhir 6 (12) ==> 2 + 12 = 10 (12)
        geser right pointer ke kiri => 9
    2. 2 + 9 = 10 (11)  geser right pointer ke kiri => 7
    3. 2 + 7 = 10 (9) geser left pointer nya ke kanan => 3
    4. 3 + 7 = 10 ==> Return index
*/

// ==============================> Optimal Solution If The Array Sorted

const twoSumRecap2 = (nums, targetSum) => {
  let leftPointer = 0;
  let rightPointer = nums.length - 1;

  while (leftPointer < rightPointer) {
    const potentialMatch = nums[leftPointer] + nums[rightPointer];
    if (potentialMatch === targetSum) {
      return [leftPointer, rightPointer];
    } else if (potentialMatch < targetSum) {
      leftPointer++;
    } else {
      rightPointer--;
    }
  }
};

const result2 = twoSumRecap2([2, 3, 4, 5, 7, 9, 12], 10);

// console.log(result2);

// ===========================> Optimal Solution With Hash Map
const twoSumRecap3 = (nums, targetSum) => {
  const storeValue = {};

  for (let i = 0; i < nums.length; i++) {
    const value = nums[i];
    const potentialMatch = targetSum - value;

    if (potentialMatch in storeValue) {
      return [storeValue[potentialMatch], i];
    } else {
      storeValue[nums[i]] = i;
      // console.log(storeValue);
    }
  }
};

const result3 = twoSumRecap3([5, 3, 9, 2, 4, 7, 12], 10);

console.log(result3);

/*
x + y = 10
y = 10 - 5 Apakah ada di hash map ? ==> Condition berikutnya  { '5': 0 }
y = 10 - 3 ==> Apakah ada di hash map ? ===> Condition berikutnya { '3': 1, '5': 0 }
y = 10 - 9 ===> Apakah ada di hash map ? ===> Condition berikutnya  { '3': 1, '5': 0, '9': 2 }
y = 10 - 2 ==> Apakah ada di hash map ? ===> Condition berikutnya { '2': 3, '3': 1, '5': 0, '9': 2 }
y = 10 - 4 ==> Apakah ada di hash map ? ===> Condition berikutnya { '2': 3, '3': 1, '4': 4, '5': 0, '9': 2 }
y = 10 - 7 ==> Apakah ada di hash map ? Oh ada ===> Return [1, 5]
y = 10 - 12 ==> -2
*/
