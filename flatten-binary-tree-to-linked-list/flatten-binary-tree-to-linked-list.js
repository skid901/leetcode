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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    if (!root) return;
    
    const [dist, stack] = [[], [root]];
    while (stack.length) {
        const curr = stack.pop();
        dist.push(curr);
        if (curr.right) stack.push(curr.right);
        if (curr.left) stack.push(curr.left);
    }
    
    dist.forEach((node, i, arr) => {
        [node.left, node.right] = [null, arr[i + 1] ?? null];
    });
};
