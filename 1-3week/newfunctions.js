//sum
//a b parameters
//3 5 arguments
function sum(a, b) {
    var result;
    result = a + b;
    //return result; undefined
    //console.log(arguments);
    return result;
}
//console.log(sum(3, 5));
//var final_result = sum(3, 5, 8, 12); 95
//var final_result = sum(3); 3 + undefined = NaN
//sum(3, 5); 
var final_result = sum(3, 5);
console.log(final_result);

function sum_of_all_args() {
    var result = 0;
    for (i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result;
}

var final_result = sum_of_all_args(1, 2, 3, 4);
console.log(final_result);

//1
function max(a, b) {
    var max;
    if (a > b) {
        max = a;
    } else {
        max = b;
    }
    return max;
}

var result = max(1, 11);
console.log(result);

//2
function odd(a) {
    if (a % 2 !== 0) {
        return true;
    } else {
        return false;
    }
}

//3

function three_digit(a) {
    if (a >= 100 || a <= 999) {
        return true;
    } else {
        return false;
    }
}

function three_digit(a) {
    var result = '' + a;
    if (result.length === 3) {
        return true;
    } else {
        return false;
    }
}

//4

function mean(a, b, c, d) {
    return (a + b + c + d) / 4;
}

//7

function digitsNumber(a) {
    var digits = 0;
    var n = a;
    while (n != 0) {
        var last_number = n % 10;
        n = (n - last_number) / 10
        digits++;
    }
    return digits;
}

function numberOfDigits(a) {
    var s = '' + a;
    return s.length;
}

var result = digitsNumber(35677);
console.log(result);

//8

var niz = [2, 4, 7, 8, 7, 7, 1];

function numberOfApperances(a, b) {
    var counter = 0;
    for (var i = 0; i < a.length; i++) {
        if (a[i] === b) {
            counter++
        }
    }
    return counter;
}

var result = numberOfApperances(niz, 7);
console.log(result);

// 9

var niz = [2, 4, 7, 8, 7, 7, 1];

function sum_of_odd(a) {
    var sum = 0;
    for (var i = 0; i < a.length; i++) {
        if (a[i] % 2 != 0) {
            sum += a[i];
        }
    }
    return sum;
}

var summa = sum_of_odd(niz);
console.log(summa);

// 10

function num_of_letters(a) {
    var sum = 0;
    for (var i = 0; i < a.length; i++) {
        if (a[i] === 'a' || a[i] === 'A') {
            sum++;
        }
    }
    return sum;
}

var ananas = num_of_letters('Ananas');
console.log(ananas);

// 11

function concate(a, b) {
    var s = '';
    for (var i = 0; i < b; i++) {
        s += a;
    }
    return s;
}

var abc = concate('abc', 4);
console.log(abc);