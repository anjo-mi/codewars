function keysAndValues(data){
  const props = [];
  const values = [];
  for (let key in data){
    props.push(key);
    values.push(data[key]);
  }
  return [props,values]
}