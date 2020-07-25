/**
 * @param {number} n
 * @return {number}
 */
var numSquares = (function() {
    const cache = {};

    return function(n) {
        if (n === 1) return 1;

        let r = Math.floor(Math.sqrt(n));
        if (n === r*r) return 1;

        if (cache[n] !== undefined) return cache[n];

        let min = n;
        for (let i = r; i > 0; i--) {
            let candidate = numSquares(n - (i*i));
            if (candidate < min) min = candidate + 1;
        }

        return cache[n] = min;
    };
})();
