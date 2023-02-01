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
function checkNumber(num) {
    if(num > 0) {
        return 'positive';
    }
    else if(num < 0) {
        return 'negative';
    }
    else {
        return 'zero';
    }
}
// --------------------------------------
function maxSum(num) {
    let result = 0;
    for(let i = 1; i <= num; i++) {
        result += i;
    }
    return result;
}
// --------------------------------------
function startsWithX(string) {
    if(string[0].toLowerCase() == 'x') {
        return true;
    }
    else if (string[0].toUpperCase() == 'X'){
        return true;
    }
    else {
        return false;
    }
}
// --------------------------------------
function endsWithX(string) {
    if (string[(string.length) - 1] == 'x') {
        return true;
    }
    else if (string[(string.length) - 1] == 'X') {
        return true;
    }
    else {
        return false;
    }
}
// --------------------------------------
function isAllX(string) {
    for(let i = 0; i < string.length; i++) {
        if (string[i].toLowerCase() !== "x") {
            return false;
        }
    }
    return true;
}
// --------------------------------------
function findFirstX(string) {
    return string.indexOf('x');
}
// --------------------------------------
function splitAtX(string) {
    const findx = string.indexOf('x');
    const a = string.slice(0,findx);
    const b = string.slice(findx+1);
    return (a.length > b.length) ? a : b;
}
// --------------------------------------