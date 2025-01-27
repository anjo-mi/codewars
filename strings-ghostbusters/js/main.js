function ghostBusters(b) {
    if (!b.includes(' ')) return "You just wanted my autograph didn't you?"
    while (b.includes(' ')){
      b = b.replaceAll(' ', '')
    }
    return b
  }