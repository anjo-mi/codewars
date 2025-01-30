function findChildren(santasList, children) {
    return santasList.reduce((a,el) => {
      if (children.includes(el) && !a.includes(el)){
        a.push(el)
      }
      return a
    }, []).sort()
  }