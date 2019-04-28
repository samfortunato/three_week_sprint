function depthFirstTraversal(root) {
  const stack = [root];

  while (stack.length > 0) {
    const node = stack.pop();
    console.log(node.val);

    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }
}

function depthFirstTraversalRecursive(root) {
  if (root === null) return;

  console.log(root.val);
  depthFirstTraversalRecursive(root.left);
  depthFirstTraversalRecursive(root.right);
}

function breadthFirstTraversal(root) {
  const nodeQueue = [root];

  while (nodeQueue.length > 0) {
    const currentNode = nodeQueue.shift();
    console.log(currentNode.val);

    if (currentNode.left) nodeQueue.push(currentNode.left);
    if (currentNode.right) nodeQueue.push(currentNode.right);
  }
}
