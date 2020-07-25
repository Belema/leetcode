/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var zigzagLevelOrder = function(root) {
    if (root === null) return [];

    let level = [root];
    let zigzag = [];
    while (level.length > 0) {
        zigzag.push(level.map(node => node.val));
        level = level.flatMap(node => [node.left, node.right]).filter(Boolean);
    }

    return zigzag.map((level, index) => index%2 === 1 ? level.reverse() : level);
};
