/*
Input: nums = [3,1,2,4]
Output: [2,4,3,1]
Explanation: The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.
*/

const sortArrayByParity = (nums) => {
  nums.sort((a, b) => b - a);

  let evenArray = [];
  let oddArray = [];

  for (const num of nums) {
    if (num % 2 === 0) {
      evenArray.push(num);
    } else {
      oddArray.push(num);
    }
  }

  const finalArray = [...evenArray, ...oddArray];
  return finalArray;
};

var sortArrayByParity2 = function (nums) {
  for (var i = 0, j = 0; j < nums.length; j++) {
    if (nums[j] % 2 === 0) {
      var temp = nums[i];
      nums[i++] = nums[j];
      nums[j] = temp;
    }
  }
  return nums;
};

var sortArrayByParity3 = function (nums) {
  const response = new Array(nums.length);
  let evenIndex = 0;
  let oddIndex = nums.length - 1;
  for (const num of nums) {
    if (num & 1) {
      response[oddIndex] = num;
      oddIndex--;
    } else {
      response[evenIndex] = num;
      evenIndex++;
    }
  }

  return response;
};

const sortArrayByParity4 = (nums) => {
  const even = nums.filter((num) => num % 2 === 0);
  const odd = nums.filter((num) => num % 2 !== 0);

  return even.concat(odd);
};

console.log(sortArrayByParity4([3, 1, 2, 4]));

// console.log(6 % 2 === 0, "Genap");
