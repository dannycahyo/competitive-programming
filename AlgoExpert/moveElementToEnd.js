/*
Input ==> [2, 1, 2, 2, 2, 3, 4, 2], 2
Output ==> [1, 3, 4, 2, 2, 2, 2,]

What we can do :
_ Filter the array
- Making conditon 
    * If the num === target ==> Move the value to the next index
- Return the array
*/

const moveELementToEnd = (array, num) => {
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    while (left < right && array[right] === num) right--;
    if (array[left] === num) swapNumber(left, right, array);
    left++;
  }

  return array;
};

/*
 - 0 < 7 && 2 === 2 ==> right = 6
 - 2 === 2 => 2 tukar posisi dengan 1 [4, 1, 3, 2, 2, 2, 2, 2]
 - 
*/

const swapNumber = (left, right, array) => {
  const temp = array[right]; // 2
  array[right] = array[left]; // 4 => 2
  array[left] = temp; // 4
};
console.log(moveELementToEnd([2, 1, 2, 2, 2, 3, 4, 2], 2));
