/*
Input: nums = [4,2,5,7]
Output: [4,5,2,7]
Explanation: [4,7,2,5], [2,5,4,7], [2,7,4,5] would also have been accepted.
*/

/*
Traverse into the array
Splice the value of i with i + 1
*/

// const sortArrayByParityII = (nums) => {
//   for (let i = 0; i < nums.length; i++) {
//     switchValue(i, i + 1, nums);
//   }

//   return nums;
// };

// const switchValue = (first, second, array) => {
//   const temp = array[second];
//   array[second] = array[first];
//   array[first] = temp;
// };

var sortArrayByParityII = function (A) {
  const result = [];
  let even = 0;
  let odd = 1;

  for (let i = 0; i < A.length; i++) {
    const number = A[i];
    if (number % 2 === 0) {
      result[even] = number;
      even += 2;
    } else {
      result[odd] = number;
      odd += 2;
    }
  }

  return result;
};

var sortArrayByParityII2 = function (nums) {
  const [odds, evens] = [
    nums.filter((n) => n % 2 === 1),
    nums.filter((n) => n % 2 === 0),
  ];

  const retArr = [];
  for (let i = 0; i < nums.length; i++) {
    i % 2 ? retArr.push(odds.pop()) : retArr.push(evens.pop());
  }
  return retArr;
};

console.log(sortArrayByParityII2([4, 2, 5, 7]));
