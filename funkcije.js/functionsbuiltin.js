
//1

var input = ["1", "21", undefined, "42", "1e+3", Infinity, NaN];

function filterOut(a) {
    var narr = [];
    for (var i = 0, j = 0; i < a.length; i++) {
        var value = parseInt(a[i]);
        if (isFinite(value)) {
            narr[j] = value;
            j++;
        }
    }
    return narr;
}

var result = filterOut(input);
console.log(result);

//console.log(parseInt("1e+3"));

//2

var input = [NaN, 0, 15, false, -22, '', undefined, 47, null];

function filterOut(a) {
    var s = '';
    for (var i = 0; i < a.length; i++) {
        var value = parseFloat(a[i]);
        if (value !== false && value !== null && isFinite(value)) {
            s += value;
        }
    }
    return s;
}

var result = filterOut(input);
console.log(result);

//console.log(isFinite(null), isFinite(true), isFinite(false), isFinite(NaN), isFinite(undefined), isFinite(Infinity));

//3

var test = [NaN, 0, 15, false, -22, "", undefined, 47, null];

function filterOut(a) {
    var narr = [];
    var i, ind;
    var res;
    for (i = 0, ind = 0; i < a.length; i++) {
        res = a[i]; //* 1;
        if (
            res !== undefined &&
            res !== Infinity &&
            res !== null &&
            res !== false &&
            !isNaN(res) &&
            res !== 0 &&
            res !== ""
        ) {
            narr[ind] = res;
            ind++;
        }
    }
    return narr;
}

var res = filterOut(test);
console.log(res);

//4

var input = [NaN, 23.1, 15, false, -22.5, '', 4, 7, null];

function filterOut(a) {
    var narr = [];
    var i, sum = 0;
    var res;
    for (i = 0, ind = 0; i < a.length; i++) {
        res = a[i]; //* 1;
        if (
            isFinite(res) &&
            res !== null &&
            res !== false &&
            res !== "" &&
            Number.isInteger(res)
        ) {
            sum++;
        }
    }
    return sum;
}

var result = filterOut(input);
console.log(result);

//console.log(typeof Infinity, typeof NaN);

//5

var input = [NaN, 23.1, 15, false, -22.5, '', 4, 7, null];

function filterOut(a) {
    var narr = [];
    var i, sum = 0;
    var res;
    for (i = 0, ind = 0; i < a.length; i++) {
        res = a[i]; //* 1;
        if (
            isFinite(res) &&
            res !== null &&
            res !== false &&
            res !== "" &&
            res - res % 1 > 0
        ) {
            sum++;
        }
    }
    return sum;
}

var result = filterOut(input);
console.log(result);
