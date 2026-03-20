const tree = require('./buildBinaryTree');
const maxPath = (root) => {
    if (!root) {
        return 0
    }
    let maxSum = 0;
    const traverseMax = (node) => {
        if (!node) {
            return 0
        }
        const left = traverseMax(node.left)
        const right = traverseMax(node.right)

        let sum = node.val + left + right
        maxSum = Math.max(sum, maxSum)
        return node.val + Math.max(left, right)
    }
    traverseMax(root)
    return maxSum
}
const binaryTree = tree.buildBinaryTree([1, 2, 3, 4, 5, 6, 7, 8]);
const maxPathSum = maxPath(binaryTree)
console.log('result of max path sum',maxPathSum);
