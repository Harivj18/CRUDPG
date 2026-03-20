const tree = require('./buildBinaryTree');

const sameTree = (p, q) =>  {
    if (!p && !q) {
        return true
    }

    if (!p || !q) {
        return false
    }

    if (p.val !== q.val) {
        return false
    }

    return (sameTree(p.left, q.left) && sameTree(p.right, q.right))
}
const tree1 = tree.buildBinaryTree([1, 2, 3, 4, 5, 6]);
const tree2 = tree.buildBinaryTree([1, 2, 3, 4, 5, 6]);

console.log('Same tree :', sameTree(tree1, tree2));
