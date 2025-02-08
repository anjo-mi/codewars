function dominator(arr) {
    const totals = arr.reduce((a,el) => {
      a[el] = (a[el] || 0) + 1;
      return a;
    }, {});
    for (let key in totals){
      if (totals[key] > arr.length / 2){
        return +(key);
      }
    }
    return -1;
  }