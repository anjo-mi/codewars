function generateName(){
  const getRando = () => String.fromCharCode(Math.ceil(Math.random() * 100));
  let random = Array(6).fill('').map(getRando).join('');
  if (photoManager[random]) return generateName();
  photoManager[random] = random
  return random;
}