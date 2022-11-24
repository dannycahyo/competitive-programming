const mapExample = new Map();

mapExample.set(true, "You can continue to do that!");
mapExample.set(false, "Sorry, you better go home!");

const succesRegistration = mapExample.get(true);
console.log(mapExample.size);

let nextStepAfterRegistration;

if (mapExample.has(true)) {
  nextStepAfterRegistration =
    "Congrattulation, your account has been registered!";
  mapExample.delete(true);
  mapExample.clear();
}

console.log(mapExample);

// =========================================================

// Map can also use objects as keys.
let john = { name: "John" };

// for every user, let's store their visits count
let visitsCountMap = new Map();

// john is the key for the map
visitsCountMap.set(john, 123);

console.log(visitsCountMap.get(john)); // 123

// ===========================================================

// Let's see how is gonna be if we're using regular object
let john2 = { name: "John" };
let ben2 = { name: "Ben" };

let visitsCountObj = {}; // try to use an object

// visitsCountObj["Name"] = "Danny";

visitsCountObj[ben2] = 234; // try to use ben object as the key
visitsCountObj[john2] = 123; // try to use john object as the key, ben object will get replaced

// That's what got written!
console.log(visitsCountObj["[object Object]"]); // 123

// Clearly we can see that if we use regular object, we can not store object as a keys

// =============================================================

// Chaining the map
let map = new Map();

map.set("1", "str1").set(1, "num1").set(true, "bool1");

console.log(map);

// ===============================================================

// Iteration over Map

let recipeMap = new Map([
  ["cucumber", 500],
  ["tomatoes", 350],
  ["onion", 50],
]);

// iterate over keys (vegetables)
for (let vegetable of recipeMap.keys()) {
  console.log(vegetable); // cucumber, tomatoes, onion
}

// iterate over values (amounts)
for (let amount of recipeMap.values()) {
  console.log(amount); // 500, 350, 50
}

// iterate over [key, value] entries
for (let entry of recipeMap) {
  // the same as of recipeMap.entries()
  console.log(entry); // cucumber,500 (and so on)
}

// runs the function for each (key, value) pair
recipeMap.forEach((value, key, map) => {
  console.log(`${key}: ${value}`); // cucumber: 500 etc
});

// ==============================================================

// Object entries for map

let obj = {
  name: "John",
  age: 30,
};

let objectEntriesWithMap = new Map(Object.entries(obj));

console.log(objectEntriesWithMap);

// Another one

let prices = Object.fromEntries([
  ["banana", 1],
  ["orange", 2],
  ["meat", 4],
]);

// now prices = { banana: 1, orange: 2, meat: 4 }

console.log(prices.orange); // 2

// Map Object to plain or general object
let mapObject = new Map();
mapObject.set("banana", 1);
mapObject.set("orange", 2);
mapObject.set("meat", 4);

let plainObject = Object.fromEntries(mapObject.entries()); // make a plain object (*)

// done!

console.log(plainObject); // plainObject = { banana: 1, orange: 2, meat: 4 }
