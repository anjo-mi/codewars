function wallpaper(l, w, h) {
    if (!l || !h || !w) return 'zero'
    const numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve","thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"]
    let tapeSize = 5.2e-1 * 10
    const surface = ((l * h * 2) + (w * h * 2)) * 1.15
    const rolls = Math.ceil(surface / tapeSize)
    return numbers[rolls]
  }

  console.log(wallpaper(6.3, 4.5, 3.29), "sixteen");
  console.log(wallpaper(7.8, 2.9, 3.29), "sixteen");
  console.log(wallpaper(6.3, 5.8, 3.13), "seventeen");
  console.log(wallpaper(6.1, 6.7, 2.81), "sixteen");
  console.log(wallpaper(0, 5.6, 3.20), "zero");