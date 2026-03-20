const tree = require('./buildBinaryTree');

function hasPathSumIterative(root, targetSum) {
    if (!root) return false;

    let queue = [[root, root.val]];

    while (queue.length) {
        const [node, sum] = queue.shift();

        // leaf node check
        if (!node.left && !node.right && sum === targetSum) {
            return true;
        }

        if (node.left) {
            queue.push([node.left, sum + node.left.val]);
        }

        if (node.right) {
            queue.push([node.right, sum + node.right.val]);
        }
    }

    return false;
}
const binaryTree = tree.buildBinaryTree([5, 4, 8, 11, null, 13, 4, 7, 2]);
console.log('Pathsum', hasPathSumIterative(binaryTree, 22));
