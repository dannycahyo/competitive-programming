/*
Input: image = [[1,1,0],[1,0,1],[0,0,0]]
Output: [[1,0,0],[0,1,0],[1,1,1]]
Explanation: First reverse each row: [[0,1,1],[1,0,1],[0,0,0]].
Then, invert the image: [[1,0,0],[0,1,0],[1,1,1]]
*/

/*
Two nested loop
The first loop to get every array
The second loop is going to be reversed looping
Making condition 
    * if the num is equal to 1, we're going to replace the current num by zero
    * if the num is eqaul to 0, we're going to replace it by 1
Return
*/

// const flippingImage = (array) => {
//   for (let idx = 0; idx < array.length; idx++) {
//     const value = array[idx];
//     for (let jdx = value.length - 1; jdx >= 1; jdx--) {
//       if (value[jdx] === 0) {
//         value[jdx] = 1;
//       } else {
//         value[jdx] = 0;
//       }
//     }
//   }

//   return array;
// };

function invert(arr) {
  return arr.reverse();
}

function flip(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 1) {
      arr.splice(i, 1, 0);
    } else if (arr[i] == 0) {
      arr.splice(i, 1, 1);
    }
  }
  return arr;
}

const flipAndInvertImage = function (image) {
  return image.map((img) => flip(invert(img)));
};

const flipAndInvertImage2 = function (image) {
  return image.map((arr) => arr.reverse().map((v) => (v === 1 ? 0 : 1)));
};

console.log(
  flipAndInvertImage2([
    [1, 1, 0],
    [1, 0, 1],
    [0, 0, 0],
  ])
);
