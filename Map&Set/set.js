// ================> Definition
// A Set is a special type collection – “set of values” (without keys), where each value may occur only once.

let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// visits, some users come multiple times
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

// set keeps only unique values
console.log(set); // 3

for (let user of set) {
  console.log(user.name); // John (then Pete and Mary)
}

// =================> Iteration Over Set
let set2 = new Set(["oranges", "apples", "bananas"]);

console.log(set2);

for (let value of set2) console.log(value);

// the same with forEach:
set.forEach((value, valueAgain, set) => {
  console.log(value);
});
