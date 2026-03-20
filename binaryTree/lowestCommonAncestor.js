const tree = require('./buildBinaryTree')
const lowestAncestor = (root, p, q) => {
    if (!root || root.val === p || root.val === q) {
        return root
    }

    const left = lowestAncestor(binaryTree, p, q);
    const right = lowestAncestor(binaryTree, p, q);

    if (left && right) {
        return root
    }

    return left ?? right
}
const binaryTree = tree.buildBinaryTree([1, 2, 3, 4, 5, 6, 7, 8])
const result = lowestAncestor(binaryTree, 4, 5)
console.log('Lowest common ancestor of tree :', result.val);
