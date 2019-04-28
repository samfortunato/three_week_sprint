// iterative
// function treeHeight(root) {
//   if (root === null) return -1;

//   const nodeStack = [root];
//   let maxHeight = 0;

//   while (nodeStack.length > 0) {
//     const currentNode = nodeStack.pop();

//     if (currentNode.left || currentNode.right) {
//       maxHeight++;
//     }

//     if (currentNode.right) nodeStack.push(currentNode.right);
//     if (currentNode.left) nodeStack.push(currentNode.left);
//   }

//   return maxHeight;
// }

// recursive
function treeHeight(root) {
  if (root === null) return -1;

  const height = Math.max(
    treeHeight(root.left),
    treeHeight(root.right)
  );

  return height + 1;
}

module.exports = {
    treeHeight
};
