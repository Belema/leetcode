/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if (n === 0) return 1;
    if (n < 0) [x, n] = [1/x, -n];
    return (n%2 === 0) ? myPow(x*x, n/2) : x*myPow(x, n-1);
};
