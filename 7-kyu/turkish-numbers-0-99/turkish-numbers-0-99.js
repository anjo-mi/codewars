 
const getTurkishNumber = (num) => {
  const singles = {0:'sıfır',1:'bir',2:'iki',3:'üç',4:'dört',5:'beş',6:'altı',7:'yedi',8:'sekiz',9:'dokuz'};
  const tens = {1:'on',2:'yirmi',3:'otuz',4:'kırk',5:'elli',6:'altmış',7:'yetmiş',8:'seksen',9:'doksan'};
  num = num.toString().split('');
  num = num.length === 2
          ? num.map((dig,i) => {
              return i === 0 ? tens[dig] : singles[dig]
            })
          : num.map(dig => singles[dig]);
  if (num.length === 2 && num[1] === 'sıfır') num.splice(1)
  return num.join(' ');
}