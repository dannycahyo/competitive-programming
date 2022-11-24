/*
- Make a function 
    - Parameter => Array of Integer
        For instance => [ 5,1,4,2 ] => Sorted [1,2,4,5]
    - Output => [ 8,40,10,20 ]
    - Jadi bayangin sebagai contoh, index 0 => 1 * 4 * 2    
    Hasil perkalian dari semua angka, kecuali angka dari index tersebut.
*/

/*
Pseudo Code 
    - Initialize empty array
    - Looping through the array for the pointer 
    - Initialize variable for saving the operation
    - Looping through the array for the multiplication
    - Making conditon => Perkalian semua angka kecuali si index dari angka tersebut
    if (i !== j) {
      currentMult *= nums[j]
    }
    - Do the operation and save it to the variable
    - Push the result of the operation to the array
    - Return the array

    https://www.youtube.com/watch?v=XKu_SEDAykw

     For instance => [ 5,1,4,2 ]
    - Output => [ 8,40,10,20 ]
*/

// const arraySum = (nums) => {
//   const finalArray = [];

//   for (let i = 0; i < nums.length; i++) {
//     let currentMult = 1;
//     for (let j = 0; j < nums.length; j++) {
//       if (i !== j) {
//         currentMult *= nums[j];
//       }
//       finalArray[i] = currentMult;
//     }
//   }

//   return finalArray;
// };
const arraySum = (nums) => {
  const rightProducts = new Array(nums.length).fill(1);

  let currentMult = 1;
  for (let i = 0; i < nums.length; i++) {
    rightProducts[i] = currentMult;
    currentMult *= nums[i];
  }

  return currentMult;
};

const result = arraySum([5, 1, 4, 2]);

// console.log(result);
console.log(new Array(4).fill(1));
