const tree = require('./buildBinaryTree')
const levelOrder = (root) => {
    if (!root) {
        return null
    }
    let queue = [root];
    let result = []
    while (queue.length) {
        let levelSize = queue.length;
        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();

            result.push(node.val);

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
const binaryTree = tree.buildBinaryTree([1, 2, 3, 4, 5, 6, 7, 8]);
console.log('levele order traversal result', levelOrder(binaryTree))