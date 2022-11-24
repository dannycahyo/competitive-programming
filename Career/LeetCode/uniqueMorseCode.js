var uniqueMorseRepresentations = function (words) {
  let dir = [
    ".-",
    "-...",
    "-.-.",
    "-..",
    ".",
    "..-.",
    "--.",
    "....",
    "..",
    ".---",
    "-.-",
    ".-..",
    "--",
    "-.",
    "---",
    ".--.",
    "--.-",
    ".-.",
    "...",
    "-",
    "..-",
    "...-",
    ".--",
    "-..-",
    "-.--",
    "--..",
  ];
  let m = new Map();
  for (let i = 0; i < 26; i++) {
    m.set(String.fromCharCode(97 + i), dir[i]);
  }

  return new Array(
    ...new Set(
      words.map((word) =>
        word
          .split("")
          .map((s) => m.get(s))
          .join("")
      )
    )
  ).length;
};

console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]));

// console.log(new Array(1, 2, 3));
// console.log(
//   "gin"
//     .split("")
//     .map((s) => s)
//     .join("")
// );
