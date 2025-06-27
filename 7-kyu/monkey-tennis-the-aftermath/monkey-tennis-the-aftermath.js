const ballCollector = (detritus) => {
  const balls = detritus.filter(el => el === 58);
  return { weight: balls.length * 58 }
}