function findChildren(santasList, children) {
    return santasList.reduce((a,el) => {
      if (children.includes(el) && !a.includes(el)){
        a.push(el)
      }
      return a
    }, []).sort()
  }

  console.log(findChildren(["Jason", "Jackson", "Jordan", "Johnny"], ["Jason", "Jordan", "Jennifer"]), ["Jason", "Jordan"]);
  console.log(findChildren(["jASon", "JAsoN", "JaSON", "jasON"], ["JasoN", "jASOn", "JAsoN", "jASon", "JASON"]), ["JAsoN", "jASon"]);
  console.log(findChildren(["Jason", "James", "Johnson"], ["Jason", "James", "JJ"]), ["James", "Jason"]);