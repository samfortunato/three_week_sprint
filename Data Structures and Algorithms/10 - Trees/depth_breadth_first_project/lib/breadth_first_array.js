function breadthFirstArray(root) {
  if (root === null) return 0;
  
  const nodeQueue = [root];
  const breadthFirstOrder = [];

  while (nodeQueue.length > 0) {
    const currentNode = nodeQueue.shift();
    breadthFirstOrder.push(currentNode.val);

    if (currentNode.left) nodeQueue.push(currentNode.left);
    if (currentNode.right) nodeQueue.push(currentNode.right);
  }

  return breadthFirstOrder;
}

module.exports = {
    breadthFirstArray
};
