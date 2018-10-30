// 1

var e = 3, niz0 = [5, -4.2, 3, 7];
var i;
var ind;
for (i = 0, ind = false; i < niz0.length && ind === false; i++) {
    if (niz0[i] === e) {
        ind = true;
    }
}
if (ind) {
    console.log("Yes");
} else {
    console.log("No");
}

// 2

var niz = [-3, 11, 5, 3.4, -8];
var i;

for (i = 0; i < niz.length; i++) {
    if (niz[i] >= 0) {
        niz[i] *= 2;
    }
}

console.log(niz);

// 3

var niz2 = [4, 2, 2, -1, 6];
var min = niz2[0];
var index;

for (i = 1; i < niz2.length; i++) {
    if (min > niz2[i]) {
        min = niz2[i];
        index = i;
    }
}

console.log(min + "\n" + index);

// 4

var min2 = niz2[0];
for (i = 1; i < niz2.length; i++) {
    if (min < min2 && min2 > niz2[i] && i !== index) {
        min2 = niz2[i];
    }
}

console.log(min2);


// 5

var niz3 = [3, 11, -5, -3, 2];
var sum = 0;

for (i = 0; i < niz3.length; i++) {
    if (niz3[i] >= 0) {
        sum += niz3[i];
    }
}

console.log(sum);

// 6

var niz4 = [2, 4, -2, 7, -2, 4, 2];
var len = niz4.length - 1;
var symmetric = true;

for (i = 0; i < len; i++) {
    if (niz4[i] !== niz4[len - i]) {
        symmetric = false;
    }
}

console.log(symmetric);

// 7

var arr1 = [4, 5, 6, 2];
var arr2 = [3, 8, 11, 9];
var arr3 = [];
var index = 0;

for (i = 0; i < arr1.length; i++) {
    arr3[index] = arr1[i];
    index += 1;
    arr3[index] = arr2[i];
    index += 1;
}

console.log(arr3);

// 8

for (i = 0; i < arr1.length; i++) {
    arr3[i] = arr1[i];
}
var j = i;
for (i = 0; i < arr2.length; i++) {
    arr3[j] = arr2[i];
    j++;
}
console.log(arr3);

// 9

var a = [4, 6, 2, 8, 2, 2];
var e = 2;
var b = [];
var indexB = 0;

for (i = 0; i < a.length; i++) {
    if (a[i] !== e) {
        b[indexB] = a[i];
        indexB++;
    }
}

console.log(b);

// 10

var e = 78, p = 3, a = [2, -2, 33, 12, 5, 8];
var i;
var temp;
for (i = a.length; i > p; i--) {
    temp = a[i];
    a[i] = a[i - 1];
    a[i - 1] = temp;
}
a[p] = e;
console.log(a);