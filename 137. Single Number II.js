/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let xor3 = nums.reduce((acc, num) => {
        return {
            one: (num & ~acc.one & ~acc.two) | (~num & acc.one),
            two: (num & acc.one) | (~num & acc.two)
        }
    }, { one: 0, two: 0});
    return xor3.one;
};
