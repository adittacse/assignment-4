// radianToDegree

function radianToDegree(radians) {
    // if else for check is it a number or not.
    if (typeof (radians) == "number") {

        const pi = Math.PI;  //Math.PI is for the value or pi = 3.1416
        let degree = radians * (180 / pi);
        let result = parseFloat(degree.toFixed(2));
        return result;
    }
    else {
        return "not a number";
    }

}
