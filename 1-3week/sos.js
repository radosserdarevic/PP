
//1

function containsFive(string) {
    return string.includes('5');
}

console.log(containsFive('abc56ghj123'));

//2

function replaceJS(string) {
    var index = 0;
    var array = string.split('');
    //ToDo
    while (string.indexOf('JS', index) !== -1) {
        index = string.indexOf('JS', index);
        array.splice(index, 2, '*', ' *');
    }
    return array.join('');
}

console.log(replaceJS('Programming in JS is super interesting! Some more JS.'));

//3

function insertCharacter(string, position, char) {
    var array = string.split('');
    array.splice(position - 1, 0, char);
    return array.join('');
}

console.log(insertCharacter('Goo morning', 4, 'd'));

//4

function deleteAtPosition(string, position) {
    var array = string.split('');
    return array.splice(position, 0, ' ').join('');
}

console.log(deleteAtPosition('Goodd morning!', 3));

//5

function deleteEverySecond(array) {
    var newArray = []
    for (var i = 0, j = 0; i < array.length; i += 2) {
        newArray[j] = array[i];
        j++;
    }
    return newArray;
}

console.log(deleteEverySecond([3, 5, 1, 8, 90, -4, 23, 1, 67]));

//6

function doubleBetweenPositons(array, start, end) {
    for (var i = start; i <= end; i++) {
        array[i] = array[i] * 2;
    }
    return array;
}

console.log(doubleBetweenPositons([3, 5, 1, 8, 90, -4, 23, 1, 67], 2, 6));

//7

function checkObjectPropertyAndValue(object, property, value) {
    return (object.hasOwnProperty(property) && object[property] === value) ? true : false;
}

console.log(checkObjectPropertyAndValue({ x: 20, y: 30 }, 'x', 20));

//8

function firstContainedInSecond(first, second) {
    var isin = false;
    for (var i = 0; i < first.length; i++) {
        for (var j = 0; j < second.length; j++) {
            if (first[i] === second[j]) {
                isin = true;
                if (!isin) {
                    return false;
                }
            }
        }
    }
    return isin;
}

console.log(firstContainedInSecond([3, 4, 1, 3], [8, 9, 3, 1, 11, 4, 3]));

//9

function numberOfA(min, max) {
    var countmin = 0;
    var countmax = 0;
    for (var i = 0; i < min.length; i++) {
        if (min[i] === 'a' || min[i] === 'A') {
            countmin++;
        }
    }
    for (var j = 0; j < max.length; j++) {
        if (max[j] === 'a' || max[j] === 'A') {
            countmax++;
        }
    }
    return countmin - countmax;
}

function sortByNumberOfA(array) {
    return array.sort(numberOfA);
}

console.log(sortByNumberOfA(['apple', 'tea', 'amazing', 'morning', 'JavaScript']));

//10

function printNextDay() {
    var now = new Date();
    var tomorow = now.getTime() + 24 * 60 * 60 * 1000;
    var tomorowdate = new Date(tomorow).toDateString();
    return tomorowdate;
}

console.log(printNextDay());

//11

function printPreviousDay() {
    var yesterday = new Date().getTime() - 24 * 60 * 60 * 1000;
    return new Date(yesterday).toString();
}

console.log(printPreviousDay());

//12

function alignRight(array) {
    var maxlength = 0;
    var length;
    var string = '';
    for (var i = 0; i < array.length; i++) {
        if (maxlength < array[i].toString().length) {
            maxlength = array[i].toString().length;
        }
    }
    for (var j = 0; j < array.length; j++) {
        length = array[j].toString().length;
        string = '';
        for (var k = 0; k < maxlength - length; k++) {
            string += ' ';
        }
        string += array[j].toString();
        console.log(string);
    }
}

console.log(alignRight([78, 111, 4, 4321])); 