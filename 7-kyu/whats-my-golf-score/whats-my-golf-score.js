function golfScoreCalculator(parList, scoreList){
  if (parList.length !== scoreList.length) throw new Error('finish your round!');
  parList = parList.split('').map(Number);
  scoreList = scoreList.split('').map(Number);
  return scoreList.reduce((a,score,i) => a += (score - parList[i]), 0);
}
