/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const taken = new Array(numCourses).fill(false);

    const { prerequisitesOf, dependentsOf } = prerequisites.reduce((acc, prerequisite) => {
        if (acc.prerequisitesOf[prerequisite[0]] === undefined) acc.prerequisitesOf[prerequisite[0]] = [];
        if (acc.dependentsOf[prerequisite[1]] === undefined) acc.dependentsOf[prerequisite[1]] = [];
        acc.prerequisitesOf[prerequisite[0]].push(prerequisite[1]);
        acc.dependentsOf[prerequisite[1]].push(prerequisite[0]);
        return acc;
    }, { prerequisitesOf: {}, dependentsOf: {} });

    let next = [...Array(numCourses).keys()].filter(courseId => prerequisitesOf[courseId] === undefined);

    while (next.length > 0) {
        next.forEach(courseId => taken[courseId] = true);
        next = [...new Set(next.flatMap(courseId => dependentsOf[courseId] || []))]
            .filter(courseId => !taken[courseId])
            .filter(courseId => prerequisitesOf[courseId].every(prerequisite => taken[prerequisite]));
    }

    return taken.every(course => course);
};
