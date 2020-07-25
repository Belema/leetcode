/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let N = s.length;

    for (let i = 0; i < (N / 2); i++){
        [s[i], s[N-i-1]] = [s[N-i-1], s[i]];
    }
};
