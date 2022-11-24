/*
Input: arr = [1,4,2,5,3]
Output: 58
Explanation: The odd-length subarrays of arr and their sums are:
[1] = 1
[4] = 4
[2] = 2
[5] = 5
[3] = 3
[1,4,2] = 7
[4,2,5] = 11
[2,5,3] = 10
[1,4,2,5,3] = 15
If we add all these together we get 1 + 4 + 2 + 5 + 3 + 7 + 11 + 10 + 15 = 58

Input: arr = [10,11,12]
Output: 66
*/

var sumOddLengthSubarrays2 = function (arr) {
  const odd = [];
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      odd.push(arr[j]);
      if (odd.length % 2 !== 0) {
        for (let val of odd) {
          count += val;
        }
      }
    }
    odd.length = 0;
  }
  return count;
};

console.log(sumOddLengthSubarrays2([10, 11, 12]));

// const myArray = [1, 2, 3, 4];
// myArray.length = 0;

// console.log(myArray);

/*
index 0 ==> odd => [10, 11, 12], If the length is odd ==> Iterate to the array and sum up the value of it. ====> Count = 33
odd ==> []
index 1 ==> odd => [11, 12, 10] The length is not odd, so we just push it
odd ==> []
index 2 ==> odd => [12, 11, 10], The length is odd ==> Iterate to the array and sum up the value of it. ====> Count = 33
*/

var sumOddLengthSubarrays = function (arr) {
  let sum = 0,
    N = arr.length;
  for (let i = 0; i < arr.length; i++) {
    let total = i * (N - i) + (N - i);
    sum += Math.ceil(total / 2) * arr[i];
  }
  return sum;
  // T.C: O(N)
  // S.C: O(1)
};

var sumOddLengthSubarrays = function (arr) {
  return arr.reduce((acc, curr, index) => {
    console.log(index);
    const plusCount = Math.ceil(((index + 1) * (arr.length - index)) / 2);
    // 1 * 5 - 1 (4) /2 ==> 2

    return acc + curr * plusCount;
  }, 0);
};

/*
- Sum all of the element and multiply it by two
 
How do we get the subsquence of it
*/

var sumOddLengthSubarrays = function (arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      const subarray_length = j - i + 1;
      const is_odd_length_subarray = subarray_length % 2 !== 0;
      if (is_odd_length_subarray === false) continue;

      // looping from start point to end point and adding them
      for (let k = i; k <= j; k++) {
        sum += arr[k];
      }
    }
  }
  return sum;
};
