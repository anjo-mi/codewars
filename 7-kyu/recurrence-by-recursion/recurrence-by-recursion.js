 
function recurrence(base, formula, term) {
  return term === 1 ? base : formula(recurrence(base,formula,term-1));
}