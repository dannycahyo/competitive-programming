const arr = [1, 5, 2, 7, 3];

const sortingValue = arr.sort((a, b) => a - b);

const minValue = sortingValue[0];
const maxValue = sortingValue[sortingValue.length - 1];

let minArray = arr.filter((value, index) => value !== index);
console.log(minArray);

let totalValue = 0;

for (let i = 0; i < minArray.length; i++) {
  totalValue += minArray[i];
}

// let maxArray = arr.filter((value) => value !== maxValue);

console.log(totalValue);
