
//1

(function (a) {
    var tmp = a[0];
    a[0] = a[a.length - 1];
    a[a.length - 1] = tmp;
    console.log(a);
})([1, 2, 3, 4])

//2

(function (a, b) {
    console.log(a * b);

})(4, 5)

//3

(function (s) {
    var arr = [];
    var str = '';
    var count = 0;
    for (var i = 0; i < s.length; i++) {
        arr[i] = s[i];
    }
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == 'm' || arr[i] == 'M') {
            arr[i] = '*';
            count++;
        }
    }
    for (var i = 0; i < arr.length; i++) {
        str += arr[i];
    }
    console.log(str, count);
})('programMing')

//4

function email(name, surname) {
    return function () {
        return name + "." + surname + "@gmail.com";
    };
}
var result = email;
console.log(result("pera", "peric"));

//5

function toDecimal(n) {
    return function () {
        return parseInt(n, 8);
    };
}

var result = toDecimal('034');
console.log(result());

function toDecimal() {
    return function (n) {
        return parseInt(n, 8);
    };
}

var result = toDecimal();
console.log(result('034'));

//6

function success() {
    return 'Password is valid!';
}

function error() {
    console.log('Password is not valid!');
}

function valid(s, successCallback, errorCallback) {
    var num = false;
    var str;
    for (var i = 0; i < s.length; i++) {
        var value = parseFloat(s[i]);
        if (!isNaN(value)) {
            num = true;
            break;
        }
    }
    if (s.length >= 6) {
        str = true;
    } else {
        str = false;
    }
    if (num && str) {
        return successCallback();
    } else {
        return errorCallback();
    }
}

console.log(valid('JSGuru123', success, error));


//7

function odd(n) {
    if (n % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

function filter(n, oddCallback) {
    var arr = [];
    var ind = 0;

    for (var i = 0; i < n.length; i++) {
        if (!oddCallback(n[i])) {
            arr[ind] = n[i];
            ind++;
        }
    }
    return arr;
}

console.log(filter([2, 8, 11, 4, 9, 3], odd));
