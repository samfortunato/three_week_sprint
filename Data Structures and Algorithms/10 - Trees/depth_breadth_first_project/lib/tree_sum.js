function treeSum(root) {
  if (root === null) return 0;

  const nodeStack = [root];
  let sum = 0;

  while (nodeStack.length > 0) {
    const currentNode = nodeStack.pop();
    sum += currentNode.val;

    if (currentNode.right) nodeStack.push(currentNode.right);
    if (currentNode.left) nodeStack.push(currentNode.left);
  }

  return sum;
}


module.exports = {
    treeSum
};
