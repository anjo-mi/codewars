function countDuplicates(name, age, height) {
  const objs = name.reduce((a,el,i) => {
    const obj = {
      name: el,
      age: age[i],
      height: height[i]
    };
    a.push(obj);
    return a;
  }, []);
  const noRepeats = [];
  for (let i = 0 ; i < objs.length ; i++){
    const {name,age,height} = objs[i];
    if (!(noRepeats.findIndex(el => el.name === name 
                              && el.age === age 
                              && el.height === height) >= 0)){
      noRepeats.push(objs[i])
    }
  }
  return objs.length - noRepeats.length;
}
​