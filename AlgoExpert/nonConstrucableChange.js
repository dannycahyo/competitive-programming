/*
Input:
"Coins": [5, 7, 1, 1, 2, 3, 22]

Output: 
20
*/

const nonConstrucableChange = (coins) => {
  let change = 0;
  coins.sort((a, b) => a - b);

  for (const coin of coins) {
    if (coin > change + 1) return change + 1;
    change += coin;
  }

  return change;
};

/*
Simple case [1, 2, 5]
1 > 0 +1 ? No it's not ==> 0 = 0 + 1
2 > 1 + 1 ? No it's not ==> 2 = 2 + 1
5 > 3 + 1, Yes absolutely ==> Return 3 + 1
*/

console.log(nonConstrucableChange([5, 7, 1, 1, 2, 3, 22]));
