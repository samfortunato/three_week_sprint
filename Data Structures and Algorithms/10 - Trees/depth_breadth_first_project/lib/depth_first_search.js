function depthFirstSearch(root, targetVal) {
  if (root === null) return null;
  if (root.val === targetVal) return root;

  const nodeStack = [root];

  while (nodeStack.length > 0) {
    const currentNode = nodeStack.pop();
    if (currentNode.val === targetVal) return currentNode;

    if (currentNode.right) nodeStack.push(currentNode.right);
    if (currentNode.left) nodeStack.push(currentNode.left);
  }

  return null;
}


module.exports = {
    depthFirstSearch
};
