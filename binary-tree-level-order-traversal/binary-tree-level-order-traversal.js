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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const [rtn, stack] = [[], [[root, 0]]];
    while (stack.length) {
        const [curr, level] = stack.pop();
        if (isNaN(curr?.val)) continue;
        if (!rtn[level]) rtn[level] = [];
        rtn[level].push(curr.val);
        if (curr?.right) stack.push([curr.right, level + 1]);
        if (curr?.left) stack.push([curr.left, level + 1]);
    }    
    return rtn;
};
