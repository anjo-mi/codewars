 
function countGrade(scores){
  const records = {S:0,A:0,B:0,C:0,D:0,X:0}
  for (const score of scores){
    if (score === 100) records.S++;
    if (score >= 90 && score < 100) records.A++;
    if (score >= 80 && score < 90) records.B++;
    if (score >= 60 && score < 80) records.C++;
    if (score >= 0 && score < 60) records.D++;
    if (score === -1) records.X++;
  }
  return records;
}