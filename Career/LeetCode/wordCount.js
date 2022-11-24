var truncateSentence = function (s, k) {
  console.log(s.split(" "));
  return s.split(" ", k).join(" ");
};

const result = truncateSentence("Hello how are you Contestant", 4);

console.log(result);

// var str = "your long string with many";
// var wordCount = str.match(/(\w+)/g).length;

// let arr1 = "Hello how are you Contestant Dude".split(" ");
// console.log(arr1.length, arr1);

// arr1.splice(3, arr1.length - 1);

// console.log(arr1.join(" "));
// console.log("Hello World".split("\\W+,")); //6
