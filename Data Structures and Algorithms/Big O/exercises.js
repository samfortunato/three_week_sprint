const findMissingNumber = (completeArr, incompleteArr) => {
  
};

findMissingNumber([8, 3, 5, 1], [1, 5, 3]);
// 8
findMissingNumber([1, 1, 1, 1], [1, 1, 1]);
// 1
findMissingNumber([3, 5, 4, 8, 7, 9], [7, 4, 3, 5, 9]);
// 8



const myMinPhaseI = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (j === i) continue;
      if (nums[j] > nums[i]) break;
    }
  }
};

const myMinPhaseII = (nums) => {
  let minimum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < minimum) {
      minimum = nums[i];
    }
  }

  return minimum;
};
