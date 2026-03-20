const tree = require('./buildBinaryTree');
const flatBinaryTree = (root) => {
    if (!root) {
        return null
    }
    let prev = null
    const formTree = (root) => {
        if (!root) {
            return
        }

        formTree(root.left)
        formTree(root.right)

        let current = root
        current.next = prev
        current.left = null
        prev = current
    }
    formTree(root)
    return prev
}
const binaryTree = tree.buildBinaryTree([1, 2, 3, 4, 5, 6, 7])
let flatTree = flatBinaryTree(binaryTree)

while (flatTree) {
    console.log('Result', (flatTree.val));
    flatTree = flatTree.next
}