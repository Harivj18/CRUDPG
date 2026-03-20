const tree = require('./buildBinaryTree');
const postOrderTraversal = (root) => {
    if (!root) {
        return null
    }
    const result = []
    const traverseNode = (node) => {
        if (!node) {
            return
        }
        traverseNode(node.left)
        traverseNode(node.right)
        result.push(node.val)
    }
    traverseNode(root)
    return result
}
const binaryTree = tree.buildBinaryTree([1, 2, 3, 4, 5, 6, 7, 8]);
console.log('Post order of binary tree', postOrderTraversal(binaryTree));
