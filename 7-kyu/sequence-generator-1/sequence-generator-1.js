const sequence = (n, pattern) => {
  return [...Array(n)][typeof pattern === `function` ? `map` : `fill`](pattern);
}