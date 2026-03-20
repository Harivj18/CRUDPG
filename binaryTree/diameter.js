const tree = require('./buildBinaryTree');
const binaryTreeDepth = (root) => {
    let maxDiameter = 0;
    const findDiameter = (node) => {
        if (!node) {
            return 0
        }
        const left = findDiameter(node.left);
        const right = findDiameter(node.right);

        maxDiameter = Math.max(maxDiameter, left + right)

        return 1 + Math.max(left, right)
    }
    findDiameter(root)
    return maxDiameter
}
const binaryTree = tree.buildBinaryTree([1, 2, 3, 4, 5, 6, 7, 8, 9])
console.log('Depth of binary tree :', binaryTreeDepth(binaryTree));
