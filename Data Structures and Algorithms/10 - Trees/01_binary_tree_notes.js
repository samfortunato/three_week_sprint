class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function inOrderPrint(root) {
  if (root === null) return;

  inOrderPrint(root.left);
  console.log(root.value);
  inOrderPrint(root.right);
}

function preOrderPrint(root) {
  if (root === null) return;

  console.log(root.value);
  preOrderPrint(root.left);
  preOrderPrint(root.right);
}

function postOrderPrint(root) {
  if (root === null) return;

  postOrderPrint(root.left);
  postOrderPrint(root.right);
  console.log(root.value);
}

const nodeA = new TreeNode('A');
const nodeB = new TreeNode('B');
const nodeC = new TreeNode('C');

nodeA.left = nodeB;
nodeA.right = nodeC;

nodeA.left === nodeB;
nodeB.right === nodeC;

nodeB.left === null;
nodeB.right === null;
nodeC.left === null;
nodeC.right === null;
