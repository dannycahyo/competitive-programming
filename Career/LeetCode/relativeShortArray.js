const relativeSortArray = function (arr1, arr2) {
  let filtered = [];
  arr2.forEach((a, index) => filtered.push(...arr1.filter((num) => num === a)));
  console.log(filtered);
  return [
    ...filtered,
    ...arr1.filter((a) => !arr2.includes(a)).sort((b, c) => b - c),
  ];
};

const relativeSortArray2 = (arr1, arr2) =>
  arr2
    .reduce((a, a2) => a.push(...arr1.filter((a1) => a1 == a2)) && a, [])
    .concat(
      ...arr1
        .filter((a1) => !arr2.includes(a1)) //filter only excluded elements
        .sort((a, b) => a - b) //ascending order
    );

// T.C: O(Nlog(N) + M), N = length of arr 1, M = length of arr2
// S.C: O(N)
const relativeSortArray3 = function (arr1, arr2) {
  let map = new Map();
  let res = [];
  for (let i = 0; i < arr1.length; i++) {
    map.set(arr1[i], map.get(arr1[i]) + 1 || 1);
  }

  // console.log(map);

  for (let i = 0; i < arr2.length; i++) {
    let freq = map.get(arr2[i]);
    // console.log(freq);
    for (let j = 0; j < freq; j++) res.push(arr2[i]);
    map.delete(arr2[i]);
  }

  console.log(res);

  let remains = [];
  for (let [num, freq] of map) {
    for (let i = 0; i < freq; i++) remains.push(num);
  }

  console.log(remains);

  remains.sort((a, b) => a - b);
  // return res.concat(remains);
};
console.log(
  relativeSortArray3([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6])
);
