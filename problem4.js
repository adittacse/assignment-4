// publicBusFare
// passenger in bus => 50
//  passenger in microbus => 11
// costs for public bus per person => 250

function publicBusFare(traveler) {
    if(typeof(traveler =="number")){
        let reservedBusContain = 50;
    let microbusContain = 11;

    let travelerForMicrobus = traveler % reservedBusContain;  //get remain traveler after bus filled.
    let travelerForPublicBus = travelerForMicrobus % microbusContain;  //get traverler for public bus
    let costInPublicBus = travelerForPublicBus * 250;
    return costInPublicBus;
    }
    else{
        return "Provide a number"
    }
}


console.log(publicBusFare(365));

