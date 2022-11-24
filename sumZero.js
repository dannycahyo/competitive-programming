var sumZero = function (n) {
  let a = new Array(n);

  if (n % 2 === 0) {
    for (let i = 0; i < n; i += 2) {
      a[i] = i + 1;
      a[i + 1] = -1 * (i + 1);
    }
  } else {
    for (let i = 0; i < n - 1; i += 2) {
      a[i] = i + 1;
      a[i + 1] = -1 * (i + 1);
    }
    a[n - 1] = 0;
  }

  return a;
};

const result = sumZero(5);
console.log(result);
// console.log(6 % 2 === 0);
