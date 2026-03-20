const tree = require('./buildBinaryTree');
const binaryTreeDepth = (root) => {
    if (!root) {
        return 0
    }
    const queue = [root]
    let depth = 0;
    while (queue.length) {
        let levelSize = queue.length;
        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift()
            if (node.left) {
                queue.push(node.left)
            }
            if (node.right) {
                queue.push(node.right)
            }
        }
        depth++
    }
    return depth
}
const binaryTree = tree.buildBinaryTree([1, 2, 3, 4, 5, 6, 7, 8, 9])
console.log('Depth of binary tree :', binaryTreeDepth(binaryTree));
