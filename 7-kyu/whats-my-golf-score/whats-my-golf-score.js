 
function golfScoreCalculator(parList, scoreList){
  if (parList.length !== scoreList.length) throw new Error('finish your round!')
  parList = parList.split('');
  scoreList = scoreList.split('');
  return scoreList.reduce((a,score,i) => a = (parList[i]) - score, 0)
}