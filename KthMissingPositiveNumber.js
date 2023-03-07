/*Intuition

It's sorted and that's gonna make it easier !
Let's solve it like a 5 yo does, but first let's look at our constraints
k= is the index of our kth missing number
num= is the number we will start with and increment it along the way
index= the index at which we're at
Approach

    We have a list of numbers called arr
    We want to find the k-th missing number starting from 1
    We start from 1 and count up one by one
    If the current number is in the arr list, we skip it
    If the current number is not in the arr list, we decrement k
    We keep doing this until we have found the k-th missing number
    Finally, we return the k-th missing number minus 1

But if we want to return the kth why did you return num-1?

Well , we return** num-1 **because the while loop will have already incremented num one extra time after finding the k-th missing number. So we subtract 1 to get the actual k-th missing number.
Another question, why do we decrement the kth as in here(k--)?

We decrement k because we want to keep track of the number of missing numbers we still need to find. When we find a missing number, we decrement k, so that we know we have found one of the missing numbers.
Complexity

    Time complexity:
    O(n)

    Space complexity:
    O(1)

Code */

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function (arr, k) {
  let num = 1;
  let index = 0;
  while (k > 0) {
    arr[index] === num ? index++ : k--;
    num++;
  }
  return num - 1;
};
