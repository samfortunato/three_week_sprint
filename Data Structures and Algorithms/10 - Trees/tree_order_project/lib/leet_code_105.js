// View the full problem and run the test cases at:
//  https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

const { TreeNode } = require('./tree_node.js');

function buildTree(preorder, inorder) {
  if (preorder.length === 0 && inorder.length === 0) {
    return null;
  }
  
  const rootVal = preorder[0];
  const root = new TreeNode(rootVal);

  const midIdx = inorder.indexOf(rootVal);
  const leftInOrder = inorder.slice(0, midIdx);
  const rightInOrder = inorder.slice(midIdx);

  const leftPreOrder = preorder.filter((val) => {
    leftInOrder.includes(val);
  });
  const rightPreOrder = preorder.filter((val) => {
    rightInOrder.includes(val);
  });

  const leftTree = buildTree(leftPreOrder, leftInOrder);
  const rightTree = buildTree(rightPreOrder, rightInOrder);

  root.left = leftTree;
  root.right = rightTree;

  return root;
}
