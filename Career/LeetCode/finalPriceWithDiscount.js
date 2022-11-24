/*
Notes ==> prices[j] <= prices[i], otherwise, you will not receive any discount at all.
[8, 4, 6, 2, 3] ===> [ 4, 2, 4, 2, 3 ]

Explanation: 
For item 0 with price[0]=8 you will receive a discount equivalent to prices[1]=4, therefore, the final price you will pay is 8 - 4 = 4. 
For item 1 with price[1]=4 you will receive a discount equivalent to prices[3]=2, therefore, the final price you will pay is 4 - 2 = 2. 
For item 2 with price[2]=6 you will receive a discount equivalent to prices[3]=2, therefore, the final price you will pay is 6 - 2 = 4. 
For items 3 and 4 you will not receive any discount at all.

Input: prices = [1,2,3,4,5]
Output: [1,2,3,4,5]
Explanation: In this case, for all items, you will not receive any discount at all.
*/

/*
- Looping through the array ==> All Of the item on the array
- Save item into the varibale in order we can use it later on
- Looping through the array ==> Second pointer
- Making condtion ==> 
    * If the i >= j => Implement the discount
    * If it's not we can increment the J index
- Return the final Array


Input: prices = [8,4,6,2,3]
Output: [4,2,4,2,3]
*/

const finalPriceWithDiscount = (prices) => {
  let finalPrice = [];
  let count = 0;

  for (let i = 0; i < prices.length; i++) {
    const firstItem = prices[i];
    for (let j = i + 1; j <= prices.length; j++) {
      const secondItem = prices[j];

      if (firstItem >= secondItem && count === 0) {
        finalPrice.push(firstItem - secondItem);
        count++;
      } else if (j + 1 === prices.length && count === 0) {
        console.log(firstItem);
        finalPrice.push(firstItem);
      }
    }
    count = 0;
  }

  finalPrice.push(prices[prices.length - 1]);
  return finalPrice;
};

const finalPrices2 = function (prices) {
  return prices.map((price, index) => {
    const otherPrices = prices.slice(index + 1);
    console.log(otherPrices);
    const discount = otherPrices.find((otherPrice) => otherPrice <= price) ?? 0;
    console.log(discount);
    return price - discount;
  });
};

const result = finalPrices2([8, 4, 6, 2, 3]);

console.log(result);

// 1 ==> 8>= 4 ? 8 - 4 : nothing = 4
// 2 ==> 4 >= 6
// 3 ==> 4 >= 2 ? 4 - 2 : nothing = 2
//  4 ===> 6 >= 2 ? 6 - 2 : nothing = 4
