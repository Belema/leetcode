/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    if (nums.length === 1) return nums[0];
    if (nums.length === 2) return Math.min(nums[0], nums[1]);

    let half = Math.floor(nums.length / 2);
    let [first, middle, last] = [nums[0], nums[half], nums[nums.length - 1]];

    if (first < last) {
        return first;
    }
    if (first === last) {
        return Math.min(findMin(nums.slice(0, half)), findMin(nums.slice(half)));
    }
    if (first < middle) {
        return findMin(nums.slice(half));
    }
    if (middle < last) {
        return findMin(nums.slice(0, half + 1));
    }
    if (first > middle) {
        return findMin(nums.slice(0, half + 1));
    }
    if (middle > last) {
        return findMin(nums.slice(half));
    }
};
