// ==========> Brute Force Approach O(n^2) Time & O(n) space

const arrayofProducts = (array) => {
  const finalProduct = [];

  for (let i = 0; i < array.length; i++) {
    let currentAcumulation = 1;
    for (let j = 0; j < array.length; j++) {
      const secondValue = array[j];

      if (i !== j) {
        currentAcumulation *= secondValue;
      }
    }
    finalProduct.push(currentAcumulation);
  }

  return finalProduct;
};

/*
- Initialize left product ==>  [1, 5, 5, 20]
- Initialize right proudct ==> [8, 8, 2, 1]
- Multiply each index of left & right product ==> [8, 40, 10, 20]
*/

// ==========> Optimal Solution O(n) Time & O(n) space

const arrayofProducts2 = (array) => {
  const products = new Array(array.length).fill(1);
  const leftProducts = new Array(array.length).fill(1);
  // console.log(leftProducts);
  const rightProducts = new Array(array.length).fill(1);

  // [5, 1, 4, 2]
  // Fill the left products
  let leftOperation = 1;
  for (let i = 0; i < array.length; i++) {
    leftProducts[i] = leftOperation;
    leftOperation *= array[i];
  }
  console.log(leftProducts);

  let rightOperation = 1;
  for (let i = array.length - 1; i > -1; i--) {
    rightProducts[i] = rightOperation;
    rightOperation *= array[i];
  }

  console.log(rightProducts);

  for (let i = 0; i < array.length; i++) {
    products[i] = leftProducts[i] * rightProducts[i];
  }

  return products;
};

// ==============> A litte bit more optimal space complexity,

const arrayofProducts3 = (array) => {
  const products = new Array(array.length).fill(1);

  // Fill the left products
  let leftOperation = 1;
  for (let i = 0; i < array.length; i++) {
    products[i] = leftOperation;
    leftOperation *= array[i];
  }

  console.log(products);

  let rightOperation = 1;
  for (let i = array.length - 1; i > -1; i--) {
    products[i] *= rightOperation;
    rightOperation *= array[i];
  }

  /**
   * 20 * 1 and then rightOperation = 2
   * 5 * 2 and then rightOperation = 8
   * 5 * 8 and then rightOperation = 8
   * 1 * 8 and then rightOperation = 5
    But we already fill the products 
   */

  return products;
};

console.log(arrayofProducts3([5, 1, 4, 2]));
