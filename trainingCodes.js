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
function lessThanTen(array) {
    let allLessThanTen = true;
    for(let i = 0; i < array.length; i++) {
        if(array[i] >= 10) {
            allLessThanTen = false;
            break;
        } 
    }
    return allLessThanTen;
}
// --------------------------------------
function lessThanTen(array) {
    for(let i = 0; i < array.length; i++) {
        if(array[i] >= 10) {
            return false;
        } 
    }
    return true;
}
// --------------------------------------

function hasOne(array) {
    for (i = 0; i < array.length; i++) {
        if (array[i] === 1) {
            return true;
        }
    }
    return false;
}
// --------------------------------------

function sumEven(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            sum += array[i];
        }
    }
    return sum;
}
// --------------------------------------

function unique(array) {
    const myArray = [];
    for(let i = 0; i < array.length; i++) {
        const element = array[i];
        if (myArray.indexOf(element) === -1) {
            myArray.push(element);
        }
    }
    return myArray;
}

// --------------------------------------

function addOne(array) {
    for(let i = 0; i < array.length; i++) {
        array[i]++;
    }
}
// --------------------------------------
function removeOccurrences(array, num) {
    for(let i = array.length - 1; i >= 0; i--) {
        if (array[i] === num) {
            array.splice(i , 1);
        }
    }
}
// --------------------------------------

const order = {
    pizzas: 5,
    extraCheese: true,
    deliveryInstructions: 'Please get us soon, we are so hungry',
};

// --------------------------------------

function numberOfPizzas(order) {
    const totalpizzas = order.pizzas;
    return totalpizzas;
}

// --------------------------------------

function numberOfPizzas(orders) {
    let total = 0;
    for(let i = 0; i < orders.length; i++) {
        total += orders[i].pizzas;
    }
    return total;
}

// --------------------------------------

// UPPER_SNAKE_CASE

const ORDER_TYPES = {
    PIZZA: 0,
    SALAD: 1,
    BURGER: 2,
    
}

// --------------------------------------
const ORDER_TYPES = require('./orderTypes');

function numberOfPizzas(orders) {
    let total = 0;
    for(let i = 0; i < orders.length; i++) {
        if (orders[i].type === ORDER_TYPES.PIZZA) {
            total += orders[i].pizzas;
        }
    }
    return total;
}

// --------------------------------------

function numberOfKeys(object) {
    for (let key in object) {
        objkey = Object.keys(object)
        total_keys = objkey.length
    }
    return total_keys;
}

// --------------------------------------

function removeSecret(object) {
    delete object.secret;
}
// --------------------------------------

// practice 2

function shortestString(str1,str2) {
    if (str1.length === str2.length) {
        return 'equal';
    }
    else if (str1.length > str2.length) {
        return str2;
    }
    else {
        return str1;
    }
}

// --------------------------------------

function halfValue(numbers) {
    const newArr = [];
    
    for(let i = 0; i < numbers.length; i++) {
        newArr[i] = Math.round(numbers[i] / 2);
    }

    return newArr;
}

// --------------------------------------

function countC(str) {
    let count = 0;
    for(let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === 'c') {
            count ++;
        }
    }
    return count;
}

// --------------------------------------

const vowels = ["a","e","i","o","u"];
function countVowels(str) {
    let count = 0;
    for(let i = 0; i < str.length; i++){
        if(vowels.includes(str[i].toLowerCase())){
            count++;
        }
    }
    return count;
}


// --------------------------------------

// Reverse in strings is different from reverse in arrays

function reverse(str) {
    let newstr = '';
    for ( i = str.length -1; i >= 0; i--) {
        newstr += str[i];
    }
    return newstr;
}


// --------------------------------------

function isPalindrome(str) {
    return str === reverse(str); 
 }
 
 function reverse(str) {
     let newstr = '';
     for(let i = str.length -1; i >= 0; i-- ) {
         newstr += str[i];
     }
     return newstr;
 }

//  --------------------------------------

function sumTogether(arr1, arr2) {
    let newarr = [];
    for (let i = 0; i < arr1.length; i++) {
        const sum = arr1[i] + arr2[i];
        newarr.push(sum) 
    }
    return newarr;
}

// --------------------------------------


function countElements(elements) {
    let countelement = {};
    for(let i = 0; i < elements.length; i++) {
        if(!countelement[elements[i]]) {
            countelement[elements[i]] = 1;
        } else {
            countelement[elements[i]] += 1;
        }
    }
    return countelement;
}


// --------------------------------------

function playerHandScore(hand) {
    const scores = {
        'K': 4,
        'Q': 3,
        'J': 2,
    }
    const handArray = hand.split('');
    let sum = 0;

    for (let i = 0; i < handArray.length; i++) {
        const score = scores[handArray[i]];
        sum += score;
    }
    return sum;

}

// --------------------------------------

function willEat(hasPizza, hasDonuts, hasCookies) {
    if (hasPizza || hasDonuts || hasCookies ) {
        return true;
    }
    return false;
}

// --------------------------------------