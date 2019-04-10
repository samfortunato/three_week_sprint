// time complexity: O(n)
// space complexity: O(n)

function tabulatedFib(n) {
  const table = new Array(n);

  table[0] = 0;
  table[1] = 1;

  for (let i = 2; i <= n; i++) {
    table[i] = table[i - 2] + table[i - 1];
  }
  
  return table[n];
}

// time complexity: O(n)
// space complexity: O(1)

function tabulatedFibSpaceEfficient(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  let secondToLastNum = 0;
  let lastNum = 1;

  for (let i = 2; i <= n; i++) {
    let lastVal = lastNum;
    lastNum = lastNum + secondToLastNum;
    secondToLastNum = lastVal;
  }

  return lastNum;
}
