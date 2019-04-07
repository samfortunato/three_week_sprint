const findMissingNumber = (completeArr, incompleteArr) => {
  const completeArrSum = completeArr.reduce((acc, el) => acc + el);
  const incompleteArrSum = incompleteArr.reduce((acc, el) => acc + el);

  return completeArrSum - incompleteArrSum;
};

findMissingNumber([8, 3, 5, 1], [1, 5, 3]);
// 8
findMissingNumber([1, 1, 1, 1], [1, 1, 1]);
// 1
findMissingNumber([3, 5, 4, 8, 7, 9], [7, 4, 3, 5, 9]);
// 8
