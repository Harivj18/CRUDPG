const tree = require('./buildBinaryTree')
const zigzagLevelOrder = (root) => {
    let result = []
    if(!root) {
        return result
    }
    let isZigZag = false;
    let queue = [root];
    while (queue.length) {
        let levelSize = queue.length;
        let level = []
        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift()

            if (isZigZag) {
                level.unshift(node.val)
            } else {
                level.push(node.val)
            }

            if (node.left) {
                queue.push(node.left)
            }
            if (node.right) {
                queue.push(node.right)
            }
        }
        isZigZag = !isZigZag
        result.push(level)
    }
    return result
}
console.log('Zig zag level order :', zigzagLevelOrder(tree.buildBinaryTree([1, 2, 3, 4, 5, 6, 7, 8, 9])));
