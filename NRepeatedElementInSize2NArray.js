/*

You are given an integer array nums with the following properties:

    nums.length == 2 * n.
    nums contains n + 1 unique elements.
    Exactly one element of nums is repeated n times.

Return the element that is repeated n times.

Example 1:

Input: nums = [1,2,3,3]
Output: 3

Example 2:

Input: nums = [2,1,2,5,3,2]
Output: 2

Example 3:

Input: nums = [5,1,5,2,5,3,5,4]
Output: 5

Constraints:

    2 <= n <= 5000
    nums.length == 2 * n
    0 <= nums[i] <= 104
    nums contains n + 1 unique elements and one of them is repeated exactly n times.

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function (nums) {
  // SOLUTION WITH CONSTANT SPACE
  // i dont even needed to count, if the number is repeated just once,
  // that number is the result since every other element is unique

  // const n = nums.length / 2;

  // nums.sort();

  // // let counter = 1;

  // for(let i = 1; i < nums.length; i++) {

  //     if(nums[i] === nums[i-1]) {
  //         return nums[i]; // counter = counter + 1;
  //     }

  //     // if(counter === n) return nums[i];
  // }

  // // SOLUTION WITH LINEAR TIME AND LINEAR SPACE

  const count = {};
  const n = nums.length / 2;

  for (let num of nums) {
    count[num] = (count[num] || 0) + 1;
    if (count[num] === n) {
      return num;
    }
  }
};
