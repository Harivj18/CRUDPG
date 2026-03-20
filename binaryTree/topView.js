const tree = require('./buildBinaryTree');
const topView = (root) => {
    if (!root) {
        return null
    }

    const queue = [[root, 0]]
    const map = new Map()
    while (queue.length) {
        const [node, hd] = queue.shift()

        if (!map.has(hd)) {
            map.set(hd, node.val)
        }
        if (node.left) {
            queue.push([node.left, hd - 1])
        }
        if (node.right) {
            queue.push([node.right, hd + 1])
        }
    }
    return [...map.entries()].map((i) => i[1])
}

const binaryTree = tree.buildBinaryTree([1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log('Topview of binary tree :', topView(binaryTree));
