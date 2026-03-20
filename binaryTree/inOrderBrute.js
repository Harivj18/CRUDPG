const tree = require('./buildBinaryTree');
const inOrderTraversal = (root) => {
    let result = [];
    if (!root) {
        return result
    }
    const traverseNode = (node) => {
        if (!node) {
            return
        }
        traverseNode(node.left)
        result.push(node.val)
        traverseNode(node.right)
    }
    traverseNode(root)
    return result
}
const binaryTree = tree.buildBinaryTree([1, 2, 3, 4, 5, 6, 7]);
console.log('Inorder Traversal of binary Tree :', inOrderTraversal(binaryTree));
