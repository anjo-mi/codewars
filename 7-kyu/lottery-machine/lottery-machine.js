 
function lottery(str){
  const arabic = '0123456789';
  const nums = str.split('').filter(el => arabic.includes(el));
  const uniques = Array.from(new Set(nums)).join('');
  return uniques.length ? uniques : 'One more run!'
}