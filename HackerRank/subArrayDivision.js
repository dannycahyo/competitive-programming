function birthday(s, d, m) {
  let dividedChocolate = 0;

  for (let i = 0; i < s.length; i++) {
    let newChocolate = s.slice(i, m + i);

    if (newChocolate.reduce((acc, cur) => acc + cur) === d) {
      dividedChocolate++;
    }
  }

  return dividedChocolate;
}

const subArrayDivision = (s, d, m) => {};

console.log(subArrayDivision([1, 2, 1, 3, 2], 3, 2));
