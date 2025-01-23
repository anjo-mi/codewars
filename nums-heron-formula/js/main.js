function heron(a, b, c) {
    const idk = (a+b+c) / 2;
    return +(Math.sqrt(idk * (idk - a) * (idk - b) * (idk - c))).toFixed(2)
  }