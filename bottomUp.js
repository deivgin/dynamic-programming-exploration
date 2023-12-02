const fib = (n) => {
  const cache = new Map();

  for (let i = 0; i <= n; i++) {
    let result;

    if (i < 2) {
      result = 1;
    } else {
      result = cache.get(i - 1) + cache.get(i - 2);
    }

    cache.set(i, result);
  }
  console.log(cache);
  return cache.get(n);
};

console.log(fib(100));
