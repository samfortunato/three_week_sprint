function inOrderArray(root) {
  if (root === null) return [];

  let treeValues = [];

  treeValues = treeValues
    .concat(inOrderArray(root.left))
    .concat(root.val)
    .concat(inOrderArray(root.right));

  return treeValues;
}

function postOrderArray(root) {
  if (root === null) return [];

  let treeValues = [];

  treeValues = treeValues
    .concat(postOrderArray(root.left))
    .concat(postOrderArray(root.right))
    .concat(root.val);

  return treeValues;
}


module.exports = {
    inOrderArray,
    postOrderArray
};
