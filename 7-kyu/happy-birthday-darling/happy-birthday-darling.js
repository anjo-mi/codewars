function womensAge(n) {
  const b = n % 2 === 0 ? n / 2 : (n-1) / 2;
  const age = n % 2 === 0 ? 20 : 21
  return `${n}? That's just ${age}, in base ${b}!`
}