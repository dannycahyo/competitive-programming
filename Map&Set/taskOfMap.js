function aclean(arr) {
  let map = new Map();

  for (let word of arr) {
    // console.log(word);
    // split the word by letters, sort them and join back
    let sorted = word.toLowerCase().split("").sort().join(""); // (*)
    map.set(sorted, word);
    console.log(map);
  }

  return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr));
