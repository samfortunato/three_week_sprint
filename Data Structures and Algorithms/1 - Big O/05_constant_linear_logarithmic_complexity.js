// constant - O(1)
function constant_1(n) {
  return n * 2 + 1;
}

function constant_2(n) {
  for (let i = 1; i <= 100; i++) {
    // code
  }
}

// logarithmic - O(log(n))
function logarithmic(n) {
  if (n <= 1) return;

  logarithmic(n / 2);
}

// linear - O(n)
function linear_1(n) {
  for (let i = 1; i <= n; i++) {
    // code
  }
}

function linear_2(n) {
  if (n === 1) return;

  linear_2(n - 1);
}

// loglinear - O(n * log(n))
function loglinear(n) {
  if (n <= 1) return;

  for (let i = 1; i <= n; i++) {
    // code
  }

  loglinear(n / 2);
  loglinear(n / 2);
}
