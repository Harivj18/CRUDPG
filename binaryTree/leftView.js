const tree = require('./buildBinaryTree');
const leftView = (root) => {
    if (!root) {
        return []
    }
    let queue = [root];
    let result = [];
    while (queue.length) {
        let levelSize = queue.length;
        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift()

            if (i === 0) {
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
const binaryTree = tree.buildBinaryTree([1, 2, 3, 4, 5, 6, 7, 8, 9])
console.log('Left View of Binary Tree :', leftView(binaryTree));
