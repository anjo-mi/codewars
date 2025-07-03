 
function pizzaRewards(cust, minOrders, minPrice) {
  const set = new Set();
  for (const c in cust){
    const eligible = cust[c].filter(ord => ord >= minPrice);
    if (eligible.length >= minOrders) set.add(c);
  }
  return Array.from(set);
}