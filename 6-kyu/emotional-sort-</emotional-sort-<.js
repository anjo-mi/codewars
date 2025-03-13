 
function sortEmotions(arr, order){
  const score = {
    ':D':5, ':)':4, ':|':3, ':(':2, 'T_T':1
  }
  return order 
          ? arr.sort((a,b) => score[b] - score[a])
          : arr.sort((a,b) => score[a] - score[b]);
}