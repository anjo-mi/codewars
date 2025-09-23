 
function getPercentage(sent, limit = 1000){
  return !sent
          ? 'No e-mails sent'
        : sent >= limit
          ? 'Daily limit is reached'
          : Math.trunc(sent * 100/limit) + '%';
}