//
function set(a) {
    a = 10;
    console.log(a);

}
var a = 15;
set(a);
console.log(a);


function setArray(arr) {
    arr[0] = 10;
    console.log(arr);

}
var a = [5, 6, 7, 8, 9];
setArray(a);
console.log(a);


//1

function check(a, e) {
    var i;
    var res = "no";

    for (i = 0; i < a.length; i++) {
        if (e == a[i]) {
            res = "yes";
        }
    }
    return res;
}
var final = check([5, -4, 2, 18, 7], 5);
console.log(final);

//2

var arr = [-3, 11, 5, 3.4, -8];
function positiveTwo(a) {
    for (var i = 1; i < a.length; i++) {
        if (a[i] >= 0) {
            a[i] = a[i] * 2;
        }
    }
    return a;
}

var res = positiveTwo(arr);
console.log(res);

//3

function min(a) {
    var minA = a[0];
    var indA = 0;
    for (var i = 1; i < a.length; i++) {
        if (minA > a[i]) {
            minA = a[i];
            indA = i;
        }
    }
    return [indA, minA];
}
var final = min([4, 2, 2, -1, 6]);
console.log(final);

//5

function minSecond(a) {
    var minA = a[0];
    var indA = 0;
    var minS = a[0];
    var indS = 0;
    for (var i = 1; i < a.length; i++) {
        if (minA > a[i]) {
            minA = a[i];
            indA = i;
        }
    }
    for (var i = 1; i < a.length; i++) {
        if (i == indA) {
        } else if (minS > a[i]) {
            minS = a[i];
            indS = i;
        }
    }
    return [indS, minS];
}
var final = minSecond([4, 2, 2, -1, 6]);
console.log(final);

//5

function sumP(a) {
    var i;
    var res = 0;
    for (i = 0; i < a.length; i++) {
        if (a > 0) {
            res += a[i];
        }
    } return res;
}
var finalResult = sumP([3, 11, -5, -3, 2]);
console.log(finalResult);

//6

var arr = [2, 4, -2, 7, -2, 4, 2];
function symetric(a) {
    var sym = true;
    for (var i = 0; i < a.length / 2; i++) {
        if (a[i] != a[a.length - 1 - i]) {
            sym = false;
        }
    }
    return sym;
}

var result = symetric(arr);
console.log(result);

//7

var n1 = [4, 5, 6, 2];
var n2 = [3, 8, 11, 9];
function inter(a, b) {
    var i;
    var j;
    var noviN = [];
    var index = 0

    for (i = 0; i < a.length; i++) {
        noviN[index] = a[i];
        index++;
        noviN[index] = b[i];
        index++
    }
    return noviN;
}

var res = inter(n1, n2);
console.log(res);

//8

var n1 = [4, 5, 6, 2];
var n2 = [3, 8, 11, 9];
function conc(a, b) {
    var j;
    var noviN = [];
    for (var i = 0; i < a.length; i++) {
        noviN[i] = a[i];
    }
    j = i;
    for (var i = 0; i < b.length; i++) {
        noviN[j] = b[i];
        j++
    }
    return noviN;
}

var res = conc(n1, n2);
console.log(res);

//9

var e = 2, n = [4, 6, 2, 8, 2, 2];
function erase(a, b) {
    var newA = [];
    var indA = 0;
    for (var i = 0; i < a.length; i++) {
        if (a[i] != b) {
            newA[indA] = a[i];
            indA++;
        }
    }
    return newA;
}

var res = erase(n, e);
console.log(res);

//10

var e = 78, p = 3, a = [2, -2, 33, 12, 5, 8];
function insert(n, e, p) {
    var tmp;
    for (var i = n.length; i > p; i--) {
        tmp = n[i];
        n[i] = n[i - 1];
        n[i - 1] = tmp;
    }
    n[p] = e;
    return n;
}

var res = insert(a, e, p);
console.log(res);



