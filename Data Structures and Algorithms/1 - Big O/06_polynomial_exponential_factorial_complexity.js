// polynomial - O(n^2)
function quadratic(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      // code
    }
  }
}

// polynomial - O(n^3)
function cubic(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      for (let k = 1; k <= n; k++) {
        // code
      }
    }
  }
}

// exponential - O(2^n)
function exponential_2n(n) {
  if (n === 1) return;

  exponential_2n(n - 1);
  exponential_2n(n - 1);
}

// exponential - O(3^n)
function exponential_3n(n) {
  if (n === 0) return;

  exponential_3n(n - 1);
  exponential_3n(n - 1);
  exponential_3n(n - 1);
}

// factorial - O(n!)
function factorial(n) {
  if (n === 1) return;

  for (let i = 1; i <= n; i++) {
    factorial(n - 1);
  }
}
