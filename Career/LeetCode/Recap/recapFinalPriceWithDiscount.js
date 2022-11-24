const finalPrices = (prices) => {
  for (let i = 0; i < prices.length - 1; i++) {
    // if the current number is greater than or eq to the next
    if (prices[i] >= prices[i + 1]) {
      prices[i] = prices[i] - prices[i + 1];
    } else {
      // find the next smallest number
      const nextMinNumber = prices.slice(i + 2).find((d) => prices[i] >= d);
      console.log(nextMinNumber);
      if (nextMinNumber) {
        prices[i] = prices[i] - nextMinNumber;
      }
    }
  }
  return prices;
};

console.log(finalPrices([8, 4, 6, 2, 3]));
