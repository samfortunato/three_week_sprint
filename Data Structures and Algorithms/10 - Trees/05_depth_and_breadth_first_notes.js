function depthFirstTraversal(root) {
  const stack = [root];

  while (stack.length > 0) {
    const node = stack.pop();
    console.log(node.val);

    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }
}
