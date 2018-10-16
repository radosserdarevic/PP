'use strict';

//1

var vowels = function (s) {
    var w = 0;
    for (var i = 0; i < s.length; i++) {
        switch (s[i]) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
            case 'A':
            case 'E':
            case 'I':
            case 'O':
            case 'U':
                w++;
        }
    }
    return w;
};

console.log(vowels('Broj samoglasnika i broj suglasnika'));

//2

var n1 = ['a', 'b', 'c'];
var n2 = [1, 2, 3];

//function alternate(a, b) {
var alternate = function (a, b) {
    var narr = [];
    var nj = 0;
    for (var i = 0; i < a.length; i++) {
        narr[nj] = a[i];
        nj++;
        narr[nj] = b[i];
        nj++;
    }
    return narr;
};

console.log(alternate(n1, n2));

//3 

var n = [1, 2, 3, 4, 5, 6];

var rotate = function (a, k) {
    var narr = [];
    var j = 0;
    for (var i = k; i < a.length; i++) {
        narr[j] = a[i];
        j++;
    }
    for (var i = 0; i < k; i++) {
        narr[j] = a[i];
        j++;
    }
    return narr;
};

console.log(rotate(n, 3));

//4

var num = 12345;

var arrayOfDigits = function (n) {
    var s = n.toString();
    //console.log(s);
    var narr = [];
    for (var i = 0; i < s.length; i++) {
        narr[i] = s[i];
    }
    return narr;
};

//var res = arrayOfDigits(num);
console.log(arrayOfDigits(num));

//5

var multiTable = function (n) {
    var s = '';
    for (var i = 1; i <= n; i++) {
        for (var j = 1; j <= n; j++) {
            s += i + ' * ' + j + ' = ' + i * j + '\n';
        }
        s += '\n';
    }
    return s;
}

console.log(multiTable(10));

//6

var temperature = function (c) {
    return c * 9 / 5 + 32;
}

console.log(temperature(37));

//7

var input = [NaN, 23.1, 15, false, -22.5, '', 4, 7, null];

var filterOut = function (a) {
    var max = -Infinity;
    for (var i = 1; i < a.length; i++) {
        if (
            isFinite(a[i]) &&
            a[i] !== null &&
            a[i] !== false &&
            a[i] !== ""
        ) {
            if (max < a[i]) {
                max = a[i];
            }
        }
    }
    return max;
}

console.log(filterOut(input));

//8

var niz = [1, 2, 3, 4, 5, 6];
var minmax = function (a) {
    var min = a[0], max = a[0];
    for (var i = 1; i < a.length; i++) {
        if (min >= a[i]) {
            min = a[i];
        }
        if (max <= a[i]) {
            max = a[i];
        }
    }
    return [min, max];

}

console.log(minmax(niz));

//9

var niz = [1, 2, 3, 4, 5, 6];
var median = function (a) {
    var sum = 0;
    for (var i = 0; i < a.length; i++) {
        sum += a[i]
    }
    return sum / a.length;
}

console.log(median(niz));

//10

var arr = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
var mostFrequent = function (a) {
    var mostmost = 0;
    var mostind;

    for (var i = 0; i < a.length; i++) {
        var most = 0;
        for (var j = 0; j < a.length; j++) {
            if (a[i] === a[j]) {
                most++;
            }
        }
        if (mostmost < most) {
            mostmost = most;
            mostind = i;
        }
    }
    return a[mostind];
}

console.log(mostFrequent(arr));

//11

var niz1 = [1, 2, 3, 4, 5];
var niz2 = [6, 7, 8, 9];
var niz3 = [];

var returnFML = function (a) {
    if (a.length % 2 == 1) {
        return [a[0], a[(a.length - 1) / 2], a[a.length - 1]];
    } else if (a.length != 0 && a.length % 2 == 0) {
        return [a[0], a[a.length - 1]];
    } else if (a) {
        return a;
    }
}

console.log(returnFML(niz1), returnFML(niz2), returnFML(niz3));

//12

var average = function () {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum / arguments.length;
}

console.log(average(2, 4, 1, 5, 8), average(7, 9), average(11, 22, 55));

//13

var aboveAverage = function () {
    var sum = 0;
    var narr = [];
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    var avg = sum / arguments.length;
    for (var i = 0, j = 0; i < arguments.length; i++) {
        if (arguments[i] > avg) {
            narr[j] = arguments[i];
            j++;
        }
    }
    return narr;
}

console.log(aboveAverage(1, 2, 3, 4, 5));

//14

var returnBMI = function (w, h) {
    var bmi = w / (h * h);
    var res;
    if (bmi < 15) {
        res = 'Starvation';
    } else if (bmi >= 15 && bmi < 17.5) {
        res = 'Anorexic';
    } else if (bmi >= 17.5 && bmi < 18.5) {
        res = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 25) {
        res = 'Ideal';
    } else if (bmi >= 25 && bmi < 30) {
        res = 'Owerweight';
    } else if (bmi >= 30 && bmi < 40) {
        res = 'Obese';
    } else if (bmi >= 40) {
        res = 'Morbidly obese';
    }
    return res;
}

console.log(returnBMI(80, 1.86));

//15

var list = ["Hello", "World", "in", "a", "frame"];

var returnInSquare = function (l) {
    var max = l[0].length;
    for (var i = 1; i < l.length; i++) {
        if (max < l[i].length) {
            max = l[i].length
        }
    }
    var s = '';
    var s1 = '', s2;
    for (var i = 0; i < max + 4; i++) {
        s1 += '*';
    }
    s1 += '\n';
    s += s1;
    for (var i = 0; i < l.length; i++) {
        s2 = '';
        if (l[i].length < max) {
            for (var j = 0; j < max - l[i].length; j++) {
                s2 += ' ';
            }
            s += '* ' + l[i] + s2 + ' *\n';
        } else {
            s += '* ' + l[i] + ' *\n';
        }
    }
    s += s1;
    return s;
}

console.log(returnInSquare(list));


