/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
    let N = costs.length / 2;

    let sortedCosts = costs.map((x) => ({ A: x[0], B: x[1] }))
                           .sort((x,y) => (x.A - x.B) < (y.A - y.B) ? 1 : -1);

    return sortedCosts.slice(0, N).reduce((acc, cur) => acc + cur.B, 0)
            + sortedCosts.slice(N).reduce((acc, cur) => acc + cur.A, 0);
};
