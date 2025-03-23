 
function bald(x){
  let count = 0;
  while (x.includes('/')){
    x = x.replace('/','-');
    count++;
  }
  const type = count > 5 
                ? 'Hobo!'
              :count > 2 
                ? 'Careless!'
              :count > 1 
                ? 'Homer!' 
              :count > 0 
                ? 'Unicorn!' 
                : 'Clean!';
  return [x,type];
}