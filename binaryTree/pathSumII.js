const tree = require('./buildBinaryTree');
const maxPath = (root, target) => {
    if (!root) {
        return null
    }
    let result = []
    const traverseTree = (sum, path, root) => {
        if (!root) {
            return
        }
        sum += root.val
        path.push(root.val)
        if (!root || !root.left && !root.right && target === sum) {
            result.push([...path])
            return
        }
        traverseTree(sum, path, root.left);
        traverseTree(sum, path, root.right);
        path.pop()
    }
    traverseTree(0, [], root)
    return result
}

const binaryTree = tree.buildBinaryTree([5, 4, 8, 11, null, 13, 4, 7, 2]);
const maxPathSum = maxPath(binaryTree, 22)
console.log('result of max path sum',maxPathSum);
