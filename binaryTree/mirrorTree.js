const tree = require('./buildBinaryTree');

const mirrorTree = (root) => {
    if (!root) {
        return true
    }
    const traverseTree = (p, q) => {
        if (!p && !q) {
            return true
        }

        if (!p || !q) {
            return false
        }

        if (p.val !== q.val) {
            return false
        }

        return (traverseTree(p.left, q.left) && traverseTree(p.right, q.right))
    }
    return traverseTree(root.left, root.right)
}
const binaryTree = tree.buildBinaryTree([1, 2, 2, 3, 4, 3, 4, 5, 6, 7, 8, 5, 6, 7, 8])
console.log('Mirror of tree :', mirrorTree(binaryTree));
