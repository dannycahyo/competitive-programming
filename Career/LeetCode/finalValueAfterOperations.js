const finalValueAfterOperations = function (operations) {
  let X = 0;

  const [plusOperator, plusOperator2] = ["X++", "++X"];

  for (let i = 0; i < operations.length; i++) {
    const value = operations[i];
    if (value === plusOperator || value === plusOperator2) {
      X += 1;
    } else {
      X -= 1;
    }
  }

  return X;
};

const finalValueAfterOperations2 = function (operations) {
  const operators = new Map();
  operators.set("X++", "X++");
  operators.set("++X", "++X");

  console.log(operators);

  let X = 0;

  for (const value of operations) {
    if (operators.has(value)) {
      X += 1;
    } else {
      X -= 1;
    }
  }

  return X;
};

const result = finalValueAfterOperations(["X++", "++X", "--X", "X--"]);

console.log(result);
