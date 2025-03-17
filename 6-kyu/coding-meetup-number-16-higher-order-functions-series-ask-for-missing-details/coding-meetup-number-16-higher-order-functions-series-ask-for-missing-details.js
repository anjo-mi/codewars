 
function askForMissingDetails(list) {
  let miss = list.filter(coder => Object.values(coder).includes(null))
                  .map(coder => {
                    for (let key in coder){
                      if (!coder[key]){
                        coder.question = `Hi, could you please provide your ${key}.`
                      }
                    }
                    return coder;
                  });
  return miss;
}