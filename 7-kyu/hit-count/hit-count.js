function counterEffect(hitCount) {
  return hitCount.split('').reduce((a,el) => {
    const numsPreceeding = [];
    for (let i = 0 ; i <= +el ; i++){
      numsPreceeding.push(i);
    }
    a.push(numsPreceeding);
    return a;
  }, []);
}