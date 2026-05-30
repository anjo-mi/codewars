 
function ipToNum(ip) {
  const bins = ip.split('.').map(n => (+n).toString(2).padStart(8,'0')).join('');
  return parseInt(bins,2)
}
​
function numToIp(num) {
  const bin = num.toString(2).padStart(32,'0');
  const bins = [];
  for (let i = 0 ; i < bin.length ; i += 8){
    bins.push(bin.slice(i,i+8));
  }
  return bins.map(bin => parseInt(bin,2)).join('.');
}