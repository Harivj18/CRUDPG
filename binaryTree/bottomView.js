const tree = require('./buildBinaryTree');
const bottomView = (root) => {
    if (!root) {
        return null
    }
    const map = new Map();
    const queue = [[root, 0]]
    while (queue.length) {
        const [node, index] = queue.shift();

        map.set(index, node.val)

        if (node.left) {
            queue.push([node.left, index - 1])
        }
        if (node.right) {
            queue.push([node.right, index + 1])
        }
    }

    return [...map.entries()].map((i) => i[1])
}
const binaryTree = tree.buildBinaryTree([1, 2, 3, 4, 5, 6, 7])
console.log('Bottom view of binary tree', bottomView(binaryTree));
