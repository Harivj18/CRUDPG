const tree = require('./buildBinaryTree');

const serializeTree = (root) => {
    const result = []
    if (!root) {
        return result
    }
    const traverseTree = (node) => {
        if (!node) {
            result.push("null")
            return
        }
        result.push(node.val);
        traverseTree(node.left)
        traverseTree(node.right)
    }
    traverseTree(root)
    return result
}
const binaryTree = tree.buildBinaryTree([1, 2, 3, 4, 5, 6, 7]);
console.log('Serialize binary tree:', serializeTree(binaryTree));

module.exports = {
    serializeTree
}