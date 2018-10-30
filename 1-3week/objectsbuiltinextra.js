
//1

var array = [2, 4, 7, 11, -2, 1];

var exp = function (a) {
    var newArray = [];
    for (var i = 0, j = 0; i < a.length; i++) {
        newArray[j] = a[i];
        j++;
        newArray[j] = a[i];
        j++;
    }
    return newArray;
}

var expPush = function (a) {
    var newArray = [];
    for (var i = 0; i < a.length; i++) {
        newArray.push(a[i]);
        newArray.push(a[i]);
    }
    return newArray;
}

console.log(expPush(array));

//2

var array = [8, 13, 8, 9, 12, 8, 1, 1, 4, 13];

var expRemove = function (a) {
    var newArray = [];
    for (var i = 0, j = 0; i < a.length; i++) {
        for (var j = i + 1; j < a.length; j++) {
            if (a[i] == a[j]) {
                a.splice(j, 1);
            }
        }
    }
    return a.sort(function (n1, n2) { return n1 - n2; });
}

console.log(expRemove(array));

//3a

var array = [1, 2, 8, 2, 1];
function odd(a) {
    return a.length % 2 === 0;
}
console.log(odd(array));

//3b

var array = [-1, 8.1, 3, 6, 2.3, 44, 2.11];

function lessMiddle(a) {
    var number;
    var counter = 0;
    if (a.length % 2 === 0) {
        return console.log('Error!');
    } else {
        //number = a[(a.length -1) / 2)];
        number = a[Math.floor(a.length / 2)];
        for (var i = 0; i < a.length; i++) {
            if (a[i] < number) {
                counter++;
            }
        }
    }
    return counter;
}

console.log(lessMiddle(array));

//4

var array = [1, 4, -2, 11, 8, 1, -2, 3];

function smallestElement(a) {
    var minValue = a[0];
    for (var i = 1; i < a.length; i++) {
        if (minValue > a[i]) {
            minValue = a[i];
        }
    }
    var minLastIndex = a.lastIndexOf(minValue);
    return { minValue: minValue, minLastIndex: minLastIndex };
}

console.log(smallestElement(array));

//5a

var array = [2, 3, 8, -2, 11, 4];

function findAllLower(a, n) {
    var newArray = [];
    for (var i = 0; i < a.length; i++) {
        if (a[i] < n) {
            newArray.push(a[i]);
        }
    }
    return newArray;
}

console.log(findAllLower(array, 6));

//5b

var array = ['JavaScript', 'Programming', 'fun', 'product'];

function findPro(a) {
    var newArray = [];
    for (var i = 0; i < a.length; i++) {
        if (a[i].toLowerCase().indexOf('pro') === 0) {
            newArray.push(a[i]);
        }
    }
    return newArray;
}

console.log(findPro(array));

//5c

var array = [2, 3, 8, -2, 11, 4];

function findAllLower(a, n) {
    var newArray = [];
    for (var i = 0; i < a.length; i++) {
        if (a[i] < n) {
            newArray.push(a[i]);
        }
    }
    return newArray;
}

function arrayAndCallback(a, n, callback) {
    return callback(a, n);
}

console.log(arrayAndCallback(array, 6, findAllLower));

//6a

var aoo = [
    { name: 'apples', price: 100 },
    { name: 'milk', price: 80 },
    { name: 'bananas', price: 150 }
];

function priceAndName(array) {
    for (var i = 0; i < array.length; i++) {
        console.log('Name: ' + array[i].name + ' Price: ' + array[i].price);
    }
}

console.log(priceAndName(aoo));

//6b

var aoo = [
    { name: 'apples', price: 100 },
    { name: 'milk', price: 80 },
    { name: 'bananas', price: 150 }
];

function totalPrice(array) {
    var result = 0;
    for (var i = 0; i < array.length; i++) {
        result += array[i].price;
    }
    return result;
}

console.log(totalPrice(aoo));

//6c

var aoo = [
    { name: 'apples', price: 100 },
    { name: 'milk', price: 80 },
    { name: 'bananas', price: 150 }
];

function averagePrice(array) {
    var result = 0;
    for (var i = 0; i < array.length; i++) {
        result += array[i].price;
    }
    return result / array.length;
}

console.log(averagePrice(aoo));

//6d

var aoo = [
    { name: 'apples', price: 100 },
    { name: 'milk', price: 80 },
    { name: 'bananas', price: 150 }
];

function mostExpensive(array) {
    var most = array[0].price;
    var mostIndex;
    for (var i = 1; i < array.length; i++) {
        if (most < array[i].price)
            mostIndex = i;
    }
    return array[mostIndex].name.toUpperCase();
}

console.log(mostExpensive(aoo));

//7a

function allCapitals(string) {
    return string === string.toUpperCase();
}

console.log(allCapitals('ALL CAPITALS'));
console.log(allCapitals('All capitals'));

//7b

function checkDigits(string) {
    var splittedString = string.split('');
    var splitted = false;
    for (var i = 0; i < string.length; i++) {
        if (typeof parseInt(splittedString[i], 10) === 'number') {
            console.log(parseInt(splittedString[i], 10));
            splitted = true;
            break;
        }
    }
    return splitted;
}

console.log(checkDigits('abc123'));
console.log(checkDigits('abcabc'));

//7c

function isValidHexadecimalColor(string) {
    var isHex = /^#[0-9A-F]{6}$/i.test(string);
    return isHex;
}

console.log(isValidHexadecimalColor('#12a3f1'));

//7d

function checkBetween(n) {
    return 1900 < n < 2018;
}

console.log(checkBetween(1977));

//7e

function validator(string, password, color, year) {
    return {
        stringValidator: string,
        passwordValidator: password,
        colorValidator: color,
        yearValidator: year
    };
}

console.log(
    validator(
        allCapitals('All capitals'),
        checkDigits('abc123'),
        isValidHexadecimalColor('#f0a8be'),
        checkBetween(1977)
    )
);

//8

function daysToBirthday(birthdaystring) {
    var nowtime = new Date().getTime();
    var birthday = new Date();
    birthday.setTime(Date.parse(birthdaystring));
    var birthdaytime = birthday.getTime();
    var timeto = birthdaytime - nowtime;
    return timeto / (24 * 60 * 60 * 1000);
}

console.log(Math.floor(daysToBirthday('21 September 2019')));

//9

function tripTakes(departure, arrival) {
    var departuredate = new Date();
    departuredate.setTime(Date.parse(departure));
    var departuretime = departuredate.getTime();
    var arrivaldate = new Date();
    arrivaldate.setTime(Date.parse(arrival));
    var arrivaltime = departuredate.getTime();
    var time = arrivaltime - departuretime;
    var hours = Math.floor(time / (60 * 60 * 1000));
    var minutes = Math.floor(time / (60 * 60 * 1000) - time / (60 * 1000));
    var seconds = Math.floor(time / (60 * 60 * 1000) - time / (60 * 1000) - time / 1000);
    console.log(hours +  ' hours ' + minutes + ' minutes ' + seconds + ' seconds');
}

console.log(tripTakes('8:22:13', '11:43:22'));

//10

function Points(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z
}

var point1 = new Points(1, 1, 1);
var point2 = new Points(2, 2, 2);

function calculateDistance(a, b) {
    return Math.sqrt(
        Math.pow((b.x - a.x), 2) +
        Math.pow((b.y - a.y), 2) +
        Math.pow((b.z - a.z), 2)
    );
}

console.log(calculateDistance(point1, point2));

//11

function generateRandom(n1, n2) {
    return Math.round((n2 - n1) * Math.random() + n1);
}

console.log(generateRandom(5, 20));

//11b

console.log(generateRandom(50, 100));

//11c

function randomArray(number, callback) {
    var newArray = [];
    for (var i = 0; i < number; i++) {
        newArray[i] = callback;
    }
    return newArray;
}

console.log(randomArray(7, generateRandom(1, 100)));