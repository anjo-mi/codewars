function determineTime (durations) {
  const getSeconds = (str) => {
    str = str.split(':').map(Number);
    return str.reduce((a,el,i) => {
      if (i === 0){
        a += el * 60 * 60
      }else if(i === 1){
        a += el * 60
      }else if(i === 2){
        a += el
      }
      return a
    }, 0);
  };
  const totalSeconds = 24 * 60 * 60;
  return durations.map(getSeconds).reduce((a,el) => a + el, 0) <= totalSeconds
}