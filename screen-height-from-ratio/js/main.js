function findScreenHeight(width, ratio) {
    let [w,h] = ratio.split(':');
    w = parseInt(w);
    h = parseInt(h);
    const mult = width / w;
    let newHeight = Math.trunc(h * mult);
    return `${width}x${newHeight}`
  }


  function findScreenHeight(width, ratio) {
    let [w,h] = ratio.split(':').map(Number);
    const newHeight = Math.trunc(h * (width / w));
    return `${width}x${newHeight}`
  }


console.log(findScreenHeight(1024,"4:3"), "1024x768");
console.log(findScreenHeight(1280,"16:9"), "1280x720");
console.log(findScreenHeight(3840,"32:9"), "3840x1080");