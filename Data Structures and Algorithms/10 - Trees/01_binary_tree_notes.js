class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
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
