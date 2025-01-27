function ghostBusters(b) {
    if (!b.includes(' ')) return "You just wanted my autograph didn't you?"
    while (b.includes(' ')){
      b = b.replaceAll(' ', '')
    }
    return b
  }

console.log(ghostBusters("Factor y") === "Factory", 'Nope, there may still be a ghost in the building. Try again.');
console.log(ghostBusters("O  f fi ce") === "Office", 'Nope, there may still be a ghost in the building. Try again.');
console.log(ghostBusters("BusStation") === "You just wanted my autograph didn't you?", 'Nope, as there were no ghosts in the BusStation you need to return a witty retort.');