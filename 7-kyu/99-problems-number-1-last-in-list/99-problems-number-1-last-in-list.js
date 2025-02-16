const last = xs => {
  if (xs.length === 0) return null;
  const final = xs[xs.length - 1];
  if (!final && 
      final !== 0 && 
      final !== undefined && 
      final !== '' && 
      final !== false){
    return null;
  }
  return final;
};
