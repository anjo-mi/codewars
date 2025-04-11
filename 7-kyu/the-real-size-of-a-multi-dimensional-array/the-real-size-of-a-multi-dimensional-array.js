function realSize(arrs) {
  return arrs.reduce((a,el) => {
    if (Array.isArray(el)) a += realSize(el)
    else {a += 1}
    return a
  }, 0)
}