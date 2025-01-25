function mean(lst){
    const nums = lst.filter(el => !isNaN(el));
    const letters = lst.filter(el => isNaN(el)).join('');
    const avg = +(nums.reduce((a,el) => a += +el, 0) / nums.length).toFixed(1);
    return [avg, letters]
  }