// oilPrice
function oilPrice(dieselQuantity, octenQuantity, patrolQuantity) {
    const dieselPricePerLitre = 114;
    const patrolPricePerLitre = 130;
    const octenPricePerLitre = 135;

    let dieselPrice = dieselQuantity * dieselPricePerLitre;

    let patrolPrice = patrolQuantity * octenPricePerLitre;
    let octenPrice = octenQuantity * patrolPricePerLitre;
    let totalPrice = dieselPrice + octenPrice + patrolPrice;
    return totalPrice;
}




