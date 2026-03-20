const tree = require('./buildBinaryTree');
const preOrderTraversal = (root) => {
    if (!root) {
        return []
    }
    let result = [];
    const traverseNode = (node) => {
        if (!node) {
            return
        }
        result.push(node.val)
        traverseNode(node.left)
        traverseNode(node.right)
    }
    traverseNode(root)
    return result;
}
console.log('PreOrder Traversal :', preOrderTraversal(tree.buildBinaryTree([1, 2, 3, 4, 5, 6, 7])));
