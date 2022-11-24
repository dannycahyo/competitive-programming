const nextGreaterElement = function (nums1, nums2) {
  //   const greatesElement = Math.max(...nums2);

  //   let finalArray = [];

  //   for (let i = 0; i < nums1.length; i++) {
  //     const firstNum = nums1[i];
  //     const secondNum = nums2[i];

  //     if (firstNum === secondNum < greatesElement) {
  //       finalArray.push(nums2[i + 1]);
  //     } else {
  //       finalArray.push(-1);
  //     }
  //   }

  //   return finalArray;
  // console.log(nums2.slice(3));
  console.log(nums1.map((num) => nums2.slice(nums2.indexOf(num))));
  return nums1.map(
    (x) => nums2.slice(nums2.indexOf(x)).find((v) => v > x) || -1
  );

  //   let ans = [];
  //   nums1.forEach(val => {
  //       const index = nums2.indexOf(val);
  //       const ele = _nextElement(nums2, index+1, nums2.length, val);
  //       ans.push(ele);
  //   })
  //   return ans;
  // };

  // const _nextElement = (nums2, left, right, target) => {
  //   while(left <= right){
  //       if(nums2[left] > target){
  //           return nums2[left];
  //       }
  //       left++;
  //   }
  //   return -1;
};

console.log(nextGreaterElement([2, 4], [1, 2, 3, 4]));
