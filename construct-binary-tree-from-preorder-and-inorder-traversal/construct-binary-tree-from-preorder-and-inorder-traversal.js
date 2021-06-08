/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    const recur = (preorder, inorder) => {
        if (!preorder.length) return null;
        
        const root = preorder.shift();
        const index = inorder.indexOf(root);
        const leftInorder = inorder.slice(0, index);
        const rightInorder = inorder.slice(index + 1);
        
        const len = leftInorder.length;
        const leftPreorder = preorder.slice(0, len);
        const rightPreorder = preorder.slice(len);
        
        const leftNode = recur(leftPreorder, leftInorder);
        const rightNode = recur(rightPreorder, rightInorder);
        return new TreeNode(root, leftNode, rightNode);
    };
    return recur(preorder, inorder);
};
