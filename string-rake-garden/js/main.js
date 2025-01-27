function rakeGarden(garden) {
    garden = garden.split(' ').map(el => {
      if (el !== 'rock' && el !== 'gravel'){
        el = 'gravel'
      }
      return el
    })
    return garden.join(' ')
  }