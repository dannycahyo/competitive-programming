/*
Input: arr = [85], pieces = [[85]]
Output: true

Input: arr = [15,88], pieces = [[88],[15]]
Output: true
Explanation: Concatenate [15] then [88]

Input: arr = [49,18,16], pieces = [[16,18,49]]
Output: false
Explanation: Even though the numbers match, we cannot reorder pieces[0].

Input: arr = [91,4,64,78], pieces = [[78],[4,64],[91]]
Output: true
Explanation: Concatenate [91] then [4,64] then [78]
*/

/*
    - Sum up the first array
    - Two for loops to sum up the second array
    - Check if the result of the first & second array are the same
*/

const checkArrayFormation = (arr, pieces) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === pieces[0][i] && pieces[0][i].length > 2) {
      return true;
    }
  }

  const firstSum = arr.reduce((acc, cur) => acc + cur, 0);
  let totalPieces = 0;

  for (let idx = 0; idx < pieces.length; idx++) {
    const everyNumber = pieces[idx];
    for (let jdx = 0; jdx < everyNumber.length; jdx++) {
      if (pieces[jdx].length > 2) {
        return false;
      } else {
        totalPieces += everyNumber[jdx];
      }
    }
  }

  return firstSum === totalPieces;
};

var canFormArray = function (arr, pieces) {
  const arrToStr = arr.join(",");
  console.log(arrToStr);
  const piecesToStr = pieces
    .sort((a, b) => arr.indexOf(a[0]) - arr.indexOf(b[0]))
    .join(",");
  console.log(piecesToStr);

  return arrToStr === piecesToStr;
};

const canFormArray2 = (arr, pieces) => {
  const map = new Map();

  for (let i = 0; i < pieces.length; i++) {
    map.set(pieces[i].join(), pieces[i]);
  }

  let seq = [];

  for (let i = 0; i < arr.length; i++) {
    seq.push(arr[i]);

    if (map.get(seq.join())) {
      map.delete(seq.join());
      seq = [];
    }
  }

  return seq.length === 0;
};

var canFormArray3 = function (arr, pieces) {
  // create map of pieces with key as first element of a piece to the piece
  const map = new Map(); // O(n)
  pieces.forEach((piece) => map.set(piece[0], piece)); // O(n)
  console.log(map);

  // traverse through the array, check if there is any piece starting with it (ordering within piece should be same)
  // if piece exist, traverse through the array and piece parallely and
  // check if the elements match.
  // when piece is traversed completely, look for another piece and follow the same
  for (let idx = 0; idx < arr.length; ) {
    // O(n)
    // exit case 1: no piece with current element
    if (!map.has(arr[idx])) {
      // O(1)
      return false;
    }
    const piece = map.get(arr[idx]); // O(1)
    let pIdx = 0;
    while (pIdx < piece.length) {
      // max - O(n)
      // exit case 2: while traversing, the piece and array index values mismatch
      if (piece[pIdx] !== arr[idx]) {
        return false;
      }
      ++pIdx;
      ++idx;
    }
  }
  // exit case 3: checked for all the elements in the array and matches it with pieces, so return true
  return true;
};

console.log(canFormArray3([15, 88], [[88], [15]]));

// console.log([[16, 18, 49]].join());
