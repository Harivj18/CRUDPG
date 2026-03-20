class binaryTree {
    constructor (val, left = null, right = null) {
        this.val = val
        this.left = left
        this.right = right
    } 
}
const postInorder = (inorder, postorder) => {
    if (inorder.length <= 0 && postorder.length <= 0) {
        return null
    }
    const map = new Map()
    inorder.map((val, index) => map.set(val, index));
    let index = postorder.length - 1
    const dfs = (start, end) => {
        if (start > end) {
            return null
        }
        let rootVal = postorder[index--];
        let root = new binaryTree(rootVal);
        let rootIndex = map.get(rootVal);

        root.right = dfs(rootIndex + 1, end)
        root.left = dfs(start, rootIndex - 1)

        return root
    }
    return dfs(0, inorder.length - 1)
}
const inorder = [9, 3, 15, 20, 7]
const postorder = [9, 15, 7, 20, 3]
console.log('Postorder and inorder:', postInorder(inorder, postorder));
