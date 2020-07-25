/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
    let ticketsFrom = tickets.reduce((acc, cur) => {
        if (acc[cur[0]] === undefined) acc[cur[0]] = [];
        acc[cur[0]].push(cur[1]);
        return acc;
    }, {});

    let output = ["JFK"];

    while (Object.keys(ticketsFrom).length > 0) {
        let insertIndex = output.length;
        while (ticketsFrom[output[insertIndex - 1]] === undefined) {
            insertIndex--;
        }

        let chain = [];
        let current = output[insertIndex - 1];
        let next = null;

        while (ticketsFrom[current] !== undefined) {
            ticketsFrom[current].sort();
            [next, ...ticketsFrom[current]] = ticketsFrom[current];
            chain.push(next);
            if (ticketsFrom[current].length === 0) delete ticketsFrom[current];
            current = next;
        }

        output = [...output.slice(0, insertIndex), ...chain, ...output.slice(insertIndex)];
    }

    return output;
};
