class Tree {
    constructor (val, left = null, right = null) {
        this.val = val
        this.left = left
        this.right = right
    }
}

const preOrderInorder = (preOrder, inOrder) => {
    if (preOrder.length <= 0 || inOrder.length <= 0) {
        return null
    }
    const map = new Map();
    inOrder.map((val, i) => map.set(val, i))
    let index = 0;
    const formTree = (start, end) => {
        if (start > end) {
            return null
        }
        const rootVal = +preOrder[index++]
        let root = new Tree(rootVal)
        let nextPos = map.get(rootVal)
        root.left = formTree(start, nextPos - 1);
        root.right = formTree(nextPos + 1, end);

        return root
    }
    return formTree(0, inOrder.length - 1);
}
const preorder = [3, 9, 20, 15, 7];
const inorder = [9, 3, 15, 20, 7];
console.log('Preorder and Inorder :', preOrderInorder(preorder, inorder))
