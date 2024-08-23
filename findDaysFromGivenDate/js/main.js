function periodIsLate(last, today, cycleLength) {
    let timeDiff = Math.abs(today - last)
    let diffInDays = Math.floor(timeDiff / (1000 * 60 * 60 * 24))
    return diffInDays > cycleLength ? true : false
  }