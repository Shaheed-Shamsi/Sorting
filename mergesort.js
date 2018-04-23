function split(wholeArray) {
    let midpoint = Math.floor((wholeArray.length / 2))
    let firstHalf = wholeArray.slice(0, midpoint)
    let secondHalf = wholeArray.slice(midpoint)

  
    return [firstHalf, secondHalf];
  }