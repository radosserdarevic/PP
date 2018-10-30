'use strict';

function sum(a, b) {
    return a + b;
}

var result;
result = sum(3, 5);
console.log(result);

var sum;

sum = function (a, b) {
    return a + b;
}

var result;
result = sum(3, 5);
console.log(result);

console.log(typeof sum);

var zbir;
zbir = sum;
console.log(typeof zbir);

result = zbir(12, 17);
console.log(result);

var sub = function (a, b) {
    return a - b;
};

var result = sub(381, 529);
console.log(result);

var f = function () { };

function findMinAndMax(array) {
    var minValue = array[0];
    var maxValue = array[0];
    var element;
    for (var i = 1; i < array.length; i++) {
        element = array[i];
        if (element < minValue) {
            minValue = element;
        }
        if (element > maxValue) {
            maxValue = element;
        }
    }
    return [minValue, maxValue];
}

function push(array, number) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        newArray[i] = array[i];
    }
    newArray[i] = number;
    return newArray;
}

function pushInPlace(array, number) {
    array[array.length] = number;
    //no return
}

var array = [1, 3, 5, 7];
var result = pushInPlace(array, 9);
console.log(result);

function shift(array, number) {
    var newArray = [];
    newArray[0] = number;
    for (var i = 1; i < array.length; i++) {
        newArray[i + 1] = array[i];
    }
    return newArray;
}

function shiftInPlace(array, number) {
    for (var i = array.length; i > 0; i--) {
        array[i] = array[i - 1];
    }
    array[0] = number;
    //console.log(array);
}

var array = [1, 3, 5, 7];
shiftInPlace(array, 9);
console.log(array);

var n = 10;
function test(a, b) {
    var c = 5;
    console.log(n);
    var n;
    console.log(a, b, c);
}

test(3, 4);

var global = 123;

function check() {
    console.log(global);
    var global = 1;
    console.log(global);
}

check();
console.log(global);