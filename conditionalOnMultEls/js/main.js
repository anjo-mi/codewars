function movie(card, ticket, perc) {
    let visits = 0
    let cardPrice = card
    let regPrice = 0
    
    while (Math.ceil(cardPrice) >= Math.ceil(regPrice)) {
        visits++
        regPrice += ticket
        cardPrice += ticket * (perc ** (visits - 1))
    }
    
    return visits - 1
}