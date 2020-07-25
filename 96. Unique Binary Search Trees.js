/**
 * @param {number} n
 * @return {number}
 */
var numTrees = (function() {
    const cache = {};

    return function(n) {
        if (n < 2) return Math.max(1, n);
        if (cache[n] !== undefined) return cache[n];
        let count = 0;
        for (let i = 0; i < n; i++) {
            count += numTrees(i) * numTrees(n-i-1);
        }
        return cache[n] = count;
    };
})();
