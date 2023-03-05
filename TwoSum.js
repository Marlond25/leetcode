/*Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

 

Constraints:

    2 <= nums.length <= 104
    -109 <= nums[i] <= 109
    -109 <= target <= 109
    Only one valid answer exists.

 
Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity? */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // MY ORIGINAL SOLUTION
  // let index1 = 0;
  // for(let index2 = 1; index2 < nums.length; index2++) {
  //     if(nums[index1] + nums[index2] === target && index1 !== index2) return [index1, index2];
  //     if(index2 === nums.length - 1) {
  //         index1 = index1 + 1;
  //         index2 = 1;
  //     }
  // }
  // return [];

  // SOLUTION AFTER READING THE EDITORIAL
  const hash = {};
  for (let index = 0; index < nums.length; index++) {
    const diff = target - nums[index];
    if (Object.keys(hash).includes(`${diff}`)) return [index, hash[diff]];
    hash[nums[index]] = index;
  }
  return [];
};
