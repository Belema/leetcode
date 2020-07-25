/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    return factorial(m+n-2)/(factorial(m - 1)*factorial(n - 1));
};

var factorial = (function() {
    const cache = {};
    return function(n) {
        if (n < 2) return 1;
        if (cache[n] !== undefined) return cache[n];
        cache[n] = n*factorial(n-1);
        return cache[n];
    }
})();
