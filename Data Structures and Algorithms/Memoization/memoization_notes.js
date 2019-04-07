// non-memoized; O(n)

function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}

factorial(6); // 720; requires 6 calls
factorial(6); // 720; requires 6 calls
factorial(5); // 120; requires 5 calls
factorial(7); // 5040; requires 7 calls

// memoized

const memo = {};

function factorialMemo(n) {
  if (n in memo) return memo[n];
  if (n === 1) return 1;

  memo[n] = n * factorial(n - 1);
  return memo[n];
}

factorialMemo(6); // 720; requires 6 calls
factorialMemo(6); // 720; requires 1 call
factorialMemo(5); // 120; requires 1 call
factorialMemo(7); // 5040; requires 2 calls



// memoizing fibs

// non-memoized; O(2^n)

function fib(n) {
  if (n === 1 || n === 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

fib(6); // 8

// memoized (and faster); O(n)

function fastFib(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n === 1 || n === 2) return 1;

  memo[n] = fastFib(n - 1, memo) + fastFib(n - 2, memo);
  return memo[n];
}
