// Problem 1
// radianToDegree

function radianToDegree(radian) {
    // if else for check is it a number or not.
    if (typeof (radian) == "number") {

        const pi = Math.PI;  //Math.PI is for the value or pi = 3.1416
        let degree = radian * (180 / pi);
        let result = parseFloat(degree.toFixed(2));
        return result;
    }
    else {
        return "not a number";
    }

}


// Problem 2
// isJavaScriptFile

function isJavaScriptFile(fileName) {
    let extension = fileName.slice(-3);  //slice -3 means the last 3 char of a string.  
    if (extension == ".js") {
        return true;
    }
    else {
        return false;
    }
}


// problem 3
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




// problem 4
// publicBusFare
// passenger in bus => 50
//  passenger in microbus => 11
// costs for public bus per person => 250

function publicBusFare(traveler) {
    if (typeof (traveler == "number")) {
        let reservedBusContain = 50;
        let microbusContain = 11;

        let travelerForMicrobus = traveler % reservedBusContain;  //get remain traveler after bus filled.
        let travelerForPublicBus = travelerForMicrobus % microbusContain;  //get traverler for public bus
        let costInPublicBus = travelerForPublicBus * 250;
        return costInPublicBus;
    }
    else {
        return "Provide a number"
    }
}




// problem 5
// isBestFriend

const man1 = { name: "Tom", friend: "Rock" };
const man2 = { name: "Rock", friend: "Tom" };
function isBestFriend(object1, object2) {
    if ((object1.name == object2.friend) && (object1.friend == object2.name)) {
        return true;
    }
    else {
        return false;
    }


}

