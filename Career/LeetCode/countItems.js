/*
Input: items = [["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], ruleKey = "color", ruleValue = "silver"
Output: 1
Explanation: There is only one item matching the given rule, which is ["computer","silver","lenovo"].

Input: items = [["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]], ruleKey = "type", ruleValue = "phone"
Output: 2
Explanation: There are only two items matching the given rule, which are ["phone","blue","pixel"] and ["phone","gold","iphone"]. 
Note that the item ["computer","silver","phone"] does not match.
*/

var countMatches = function (items, ruleKey, ruleValue) {
  let match = 0;
  let allRuleKeys = ["type", "color", "name"];
  let idx = allRuleKeys.indexOf(ruleKey);
  console.log(idx);

  for (let i = 0; i < items.length; i++) {
    const value = items[i];
    console.log(value[idx]);
    if (value[idx] === ruleValue) {
      match++;
    }
  }

  return match;
};

const items = [
  ["phone", "blue", "pixel"],
  ["computer", "silver", "phone"],
  ["phone", "gold", "iphone"],
];

const result = countMatches(items, "type", "phone");

console.log(result);

/*
Initialize match Variable
Looping through the array
Making condition based on rule key and ruleValue
If match increment the variable
Return the variable
*/
