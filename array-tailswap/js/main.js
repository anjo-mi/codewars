function tailSwap(arr) {
    let [first, second] = arr
    const [firstStart, firstEnd] = first.split(':')
    const [secondStart, secondEnd] = second.split(':')
    const newFirst = [firstStart, secondEnd].join(':')
    const newSecond = [secondStart, firstEnd].join(':')
    return [newFirst, newSecond]
  }

  console.log(['abc:123', 'cde:456'], ['abc:456', 'cde:123']);
  console.log(['a:12345', '777:xyz'], ['a:xyz', '777:12345']);