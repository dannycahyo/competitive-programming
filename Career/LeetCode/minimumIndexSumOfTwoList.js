/*
You need to help them find out their common interest with the least list index sum. If there is a choice tie between answers, 
output all of them with no order requirement. 

Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]
Output: ["Shogun"]
Explanation: The only restaurant they both like is "Shogun".

Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["KFC","Shogun","Burger King"]
Output: ["Shogun"]
Explanation: The restaurant they both like and have the least index sum is "Shogun" with index sum 1 (0+1).

Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["KFC","Burger King","Tapioca Express","Shogun"]
Output: ["KFC","Burger King","Tapioca Express","Shogun"]

Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["KNN","KFC","Burger King","Tapioca Express","Shogun"]
Output: ["KFC","Burger King","Tapioca Express","Shogun"]
*/

/*
    - Map both array 
      * First array ==> { "Shogun": 0, "Tapioca Express": 1, "Burger King": 2, "KFC": 3 }
      * Second array ==> { "KFC": 0, "Shogun": 1, "Burger King": 2 }
    - Traverse into the array
      * Find the same key
      * Sum up the value of both key
      * Get the minimum sum
      * Return the key with minimum value
*/

const minimumIndexSumOfTwoList = (list1, list2) => {
  const finalFood = [];

  const map1 = new Map();
  for (let idx = 0; idx < list1.length; idx++) {
    map1.set(list1[idx], idx);
  }

  const map2 = new Map();
  for (let idx = 0; idx < list2.length; idx++) {
    map2.set(list2[idx], idx);
  }

  let minSum = Infinity;
  for (const food of list1) {
    if (map1.has(food) === map2.has(food)) {
      const sumFood = map1.get(food) + map2.get(food);
      minSum = Math.min(minSum, sumFood);
    }
  }

  for (const key of map1.keys()) {
    if (map1.get(key) + map2.get(key) === minSum) {
      finalFood.push(key);
    }
  }

  return finalFood;
};

console.log(
  minimumIndexSumOfTwoList(
    ["Shogun", "Tapioca Express", "Burger King", "KFC"],
    ["KNN", "KFC", "Burger King", "Tapioca Express", "Shogun"]
  )
);
