class Tree {
  constructor(val, left = null, right = null) {
    this.val = val
    this.left = null
    this.right = right
  }
}

const buildBinaryTree = (nums) => {
  if (nums.length < 0) {
    return null
  }
  const root = new Tree(nums[0]);
  const queue = [root]
  let i = 1
  while (i < nums.length) {
      let node = queue.shift();
      if (nums[i]) {
        node.left = new Tree(nums[i++])
        queue.push(node.left)
      }
      if (i < nums.length && nums[i]) {
        node.right = new Tree(nums[i++]);
        queue.push(node.right)
      }
  }
  return root
}
// console.log('Result of Binary Tree :', buildBinaryTree([1, 2, 3, 4, 5, 6, 7]));

module.exports = { buildBinaryTree };
