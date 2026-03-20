const tree = require('./buildBinaryTree');
const rightView = (root) => {
    if (!root) {
        return null
    }
    const queue = [root]
    let result = []
    while (queue.length) {
        let size = queue.length;
        for (let i = 0; i < size; i++) {
            const node = queue.shift()

            if (i === size - 1) {
                result.push(node.val)
            }

            if (node.left) {
                queue.push(node.left)
            }

            if (node.right) {
                queue.push(node.right)
            }
        }
    }
    return result
}
const binaryTree = tree.buildBinaryTree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])
console.log('Right view of binary tree :', rightView(binaryTree));
