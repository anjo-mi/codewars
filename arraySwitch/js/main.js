let fighters = [
    ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
    ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
  ];

  function streetFighterSelection(fighters, position, moves){
    let horz = position[1]
    let vert = position[0]
    let movedTo = []
    moves.forEach(el => {
      switch (el){
          case 'up' :
            vert = vert > 0 ? vert - 1 : vert
            break
          case 'down' :
            vert = vert < 1 ? vert + 1 : vert
            break
          case 'right' :
            horz = horz < fighters[0].length - 1 ? horz + 1 : 0
            break
          case 'left' : 
            horz = horz > 0 ? horz - 1 : fighters[0].length - 1
            break
      }
      movedTo.push(fighters[vert][horz])
    })
    return movedTo
  }