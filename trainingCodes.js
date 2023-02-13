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

function double(x) {
    return(x || 0) * 2;
}

// --------------------------------------

function canBreathe(isConnected, hasOxygen, aboveWater) {
    return (isConnected && hasOxygen) || aboveWater;
}
// --------------------------------------

function friendName(friend) {
    return friend && friend.name;
}


// --------------------------------------

function carCrossing(aCrossing, bCrossing) {
    return (aCrossing && !bCrossing) ||
    (!aCrossing && bCrossing);
}

// --------------------------------------
function catchError(fn) {
    try {
        fn();
    }
    catch(ex) {
        
    }
}
// --------------------------------------

function catchError(fn) {
    try {
        fn();
    }
    catch(ex) {
        return ex;
        
    }
    return false;
}

// --------------------------------------

function toNumber(string) {
    return Number(string) || 0;
}

// --------------------------------------

function combineToString(a, b) {
    return a + '' + b;
}

// --------------------------------------

function isTruthy(a) {
    if (a) {
        return true;
    }
    return false;
}

// --------------------------------------

function looseEquals(a, b) {
    if (a == b) {
        return true;
    }
    return false;
}

// --------------------------------------


function toJSON(obj) {
    result = JSON.stringify(obj);
    return result;
}


// --------------------------------------

const personJSON = `{
    "name": "Sia",
    "age": 24,
    "isReal": true

}`;

// --------------------------------------

function eitherNotBoth(num) {
    if((num % 3 === 0 && num % 5 !== 0) ||
    ( num % 3 !== 0 && num % 5 === 0)) {
        return true;
    } else {
        return false;
    }
}

// --------------------------------------

function fizzBuzz(numbers) {
    let str = '';
    for(let i = 0; i < numbers.length; i++) {
        const number = numbers[i]
        if (number % 3 === 0) {
            str += 'fizz';
        }
        if (number % 5 === 0) {
            str += 'buzz';
        }
    }
    return str;
}


// --------------------------------------

function thisName() {
    return this.name;
    
}

// --------------------------------------

function thisName() {

    return this.name;
    
}

console.log(thisName.bind({name: 'Bob'}));

// --------------------------------------

const obj = {
    name: 'Bob',
    getName: function() {
        return this.name;
    }
}

// --------------------------------------


const celebrities = {
    'Will Smith': 51,
    'Matt Damon': 49,
}

function fetchAge(name, cb) {
    cb(celebrities[name]);
}



const fetchAge = require('./fetchAge');

function Celebrity(name) {
    this.name = name;

    fetchAge(this.name, (age) => {
        this.age = age;
    });
}


// --------------------------------------

// Our Shape "Constructor"
function Shape(x, y) {
    // store x and y in this.position
    this.position = {x ,y}
}

// --------------------------------------

function Shape(x, y) {
    this.position = { x , y };
}

Shape.prototype.move = function(x,y) {
    this.position.x += x;
    this.position.y += y;
}


const Shape = require('./Shape');

function Circle(x, y, radius) {
    Shape.call(this,x,y);
    this.radius = radius;
}

// --------------------------------------

const Shape = require('./Shape');

function Circle(x, y, radius) {
    Shape.call(this,x,y);
    this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);

// --------------------------------------

const Shape = require('./Shape');

function Rectangle(x, y, height, width) {
    Shape.call(this,x,y);
    this.height = height;
    this.width = width;
}
Rectangle.prototype = Object.create(Shape.prototype);


// --------------------------------------

const Shape = require('./Shape');

function Rectangle(x, y, height, width) {
    Shape.call(this,x,y);
    this.height = height;
    this.width = width;
    this.flip = function() {
    const width = this.width;
    this.width = this.height;
    this.height = width;
    }
}
Rectangle.prototype = Object.create(Shape.prototype);

module.exports = Rectangle;

// --------------------------------------

class Hero {
    constructor() {
        this.health = 50;
    }
}

// --------------------------------------

class Hero {
    constructor() {
        this.health = 50;
    }
    takeDamage(damage) {
        this.health -= damage;
    }
}
// --------------------------------------

const Hero = require('./Hero.js');

class Warrior extends Hero {
    
}

// --------------------------------------

const Hero = require('./Hero.js');

class Warrior extends Hero {
    constructor() {
        super();
        this.rage = 0;
    }
}

// --------------------------------------

const Hero = require('./Hero.js');

class Warrior extends Hero {
    constructor() {
        super();
        this.rage = 0;
    }
    takeDamage(damage) {
        super.takeDamage(damage);
        this.rage += 1;
    }
}

// --------------------------------------

class Hero {
    constructor(health) {
        this.health = health;
    }
    takeDamage(damage) {
        this.health -= damage;
    }
}

// --------------------------------------

const Hero = require('./Hero.js');

class Warrior extends Hero {
    constructor(health) {
        super(health);
        this.rage = 0;
    }
    takeDamage(damage) {
        super.takeDamage(damage);
        this.rage += 1;
    }
}

function sortUp(array) {
    array.sort(function comparison(a,b) {
        return a-b;
    })
}

// --------------------------------------

function sortDown(array) {
    array.sort(function comparison(a,b) {
        return b-a;
    })
}

// --------------------------------------

function sortStringsUp(array) {
    array.sort((a,b) => {
        return a.localeCompare(b)
    });
}

// --------------------------------------

function sortStringsDown(array) {
    array.sort((a,b) => {
        return b.localeCompare(a)
    });
}

// --------------------------------------

function sortStudents(students) {
    students.sort((a,b) => {
        if(a.graduated && !b.graduated) {
            return -1;
        }
        if(b.graduated && !a.graduated) {
            return 1;
        }
        return b.grade - a.grade;
    });
}

// --------------------------------------

const MONTHS = [
    'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
    'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'
];

function sortByMonth(array) {
    array.sort((a,b) => {
        return MONTHS.indexOf(a.month) -
        MONTHS.indexOf(b.month);
    })
}
// --------------------------------------
