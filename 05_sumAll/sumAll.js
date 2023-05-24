const sumAll = function(numOne, numTwo) {
    if (numOne < 0 || numTwo < 0 || typeof numOne !== "number" || typeof numTwo !== "number")
        return "ERROR";

    let sum = 0;
    let lower = numOne;
    let higher = numTwo;

    if (numOne > numTwo) {
        lower = numTwo;
        higher = numOne;
    }

    for (let i = lower; i <= higher; i ++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
