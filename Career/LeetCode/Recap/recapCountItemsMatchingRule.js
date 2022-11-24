/*
Input: items = [["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], ruleKey = "color", ruleValue = "silver"
Output: 1
Explanation: There is only one item matching the given rule, which is ["computer","silver","lenovo"].

Input: items = [["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]], ruleKey = "type", ruleValue = "phone"
Output: 2
Explanation: There are only two items matching the given rule, which are ["phone","blue","pixel"] and ["phone","gold","iphone"]. Note that the item ["computer","silver","phone"] does not match.
*/

/*
- Looping through the array 
- Find the index of the array based on rule key
- Find the rule value accroding to the given index of rule key
*/

// let allRuleKeys = ["type", "color", "name"];

const countItemsMatchingRule = (array, rulekey, ruleValue) => {
  let count = 0;
  const allRuleKeys = ["type", "color", "name"];
  const idx = allRuleKeys.indexOf(rulekey);

  for (const value of array) {
    if (value[idx] === ruleValue) count++;
  }

  return count;
};

console.log(
  countItemsMatchingRule(
    [
      ["phone", "blue", "pixel"],
      ["computer", "silver", "lenovo"],
      ["phone", "gold", "iphone"],
    ],
    "type",
    "phone"
  )
);
