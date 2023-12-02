const cache = new Map();

const fib = (n) => {
  if (cache.has(n)) {
    return cache.get(n);
  }

  let result;

  if (n < 2) {
    result = n;
  } else {
    result = fibMemo(n - 1) + fibMemo(n - 2);
  }

  cache.set(n, result);
  return result;
};

console.log(fib(100));
