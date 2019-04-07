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
