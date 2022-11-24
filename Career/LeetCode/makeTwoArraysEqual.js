const makeEqual = (target, arr) => {
  arr.sort((a, b) => a - b);
  target.sort((a, b) => a - b);

  let isEqual = true;

  for (let idx = 0; idx < target.length; idx++) {
    const value = target[idx];
    const valueToCompare = arr[idx];

    if (value !== valueToCompare) isEqual = false;
  }

  return isEqual;
};

console.log(makeEqual([3, 7, 9], [3, 7, 11]));
