 
const getNum = (arr) => arr.filter(el => Number.isInteger(el))[0];
​
function holidayCount(a1, a2) {
  const me = getNum(a2);
  const u  = getNum(a1);
  if (!Number.isInteger(me) || !Number.isInteger(u)) return 'Not possible';
  return me > u ? 'Wrong'
        :me < u ? 'Right' : 'Same';
}