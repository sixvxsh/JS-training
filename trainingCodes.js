function isEqual(a,b) {
    if(a === b) {
        return true;
    }
}
// --------------------------------------
function isNotEqual(a,b) {
    if(a !== b) {
        return true;
    }
    else {
        return false;
    }
}
// --------------------------------------
function isNotEqual(a,b) {
    if(a !== b) {
        return true;
    }
    else {
        return false;
    }
}
// --------------------------------------
function greater(first,last) {
    if(first > last) {
        return first;
    }
    if(first < last) {
        return last;
    }
}
// --------------------------------------
function isEnough(cost,money) {
    if(money >= cost) {
        return true;
    }
    return false;
}
// --------------------------------------
function canAccess(purchasedSubscription, freeTrial) {
    if (purchasedSubscription) {
        return true;
    }
    else if(freeTrial) {
        return true;
    }
    else {
        return false;
    }
}
// --------------------------------------
function topDouble(value,top) {
    let previous = value;
    while (value <= top) {
        previous = value;
        value *= 2;
    }
    return previous;
}
// --------------------------------------
function isEven(num) {
    if(num % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}
// --------------------------------------
function smallerNumber(num1,num2) {
    if(num1 > num2) {
        return num2;
    }
    else {
        return num1;
    }
}
// --------------------------------------

const fakeName = require('./fakeName');

const message = `
    Hello, ${fakeName}! You left a package at the office today.
    You can pick up tomorrow at 10am, ${fakeName}. 
    If not I will drop it off this weekend.
    Goodbye ${fakeName}!
`;

// --------------------------------------

