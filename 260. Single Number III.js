/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    let xor = nums.reduce((xor, num) => xor ^ num, 0);
    let trailingOne = (xor & (xor-1)) ^ xor;
    let num1 = nums.filter(n => n & trailingOne).reduce((xor, num) => xor ^ num, 0);
    return [num1, num1^xor];
};

// I stole this clever trick from https://leetcode.com/problems/single-number-iii/discuss/750622/Python-4-Lines-O(n)-time-O(1)-space-explained
