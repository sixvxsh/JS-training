function isEqual(a,b) {
    if(a === b) {
        return true;
    }
}
// -----------------------------------------------------------------------------
function isNotEqual(a,b) {
    if(a !== b) {
        return true;
    }
    else {
        return false;
    }
}
// -----------------------------------------------------------------------------
function isNotEqual(a,b) {
    if(a !== b) {
        return true;
    }
    else {
        return false;
    }
}
// -----------------------------------------------------------------------------
function greater(first,last) {
    if(first > last) {
        return first;
    }
    if(first < last) {
        return last;
    }
}
// -----------------------------------------------------------------------------
function isEnough(cost,money) {
    if(money >= cost) {
        return true;
    }
    return false;
}
// -----------------------------------------------------------------------------
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
// -----------------------------------------------------------------------------
function topDouble(value,top) {
    let previous = value;
    while (value <= top) {
        previous = value;
        value *= 2;
    }
    return previous;
}
// -----------------------------------------------------------------------------

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
// -----------------------------------------------------------------------------

