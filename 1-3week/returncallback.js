function outer() {
    var inner = function () {
        console.log("Inner");
    }
    return inner;
}

var result = outer();
result();

console.log(result);


function outer() {
    var inner = function (name) {
        console.log("Inner hello " + name);
    }
    return inner;
}

var result = outer();
result("svi");


function outer() {
    return function (name) {
        console.log("Inner hello " + name);
    };
}

var result = outer();
result("svi");

outer()("ostali");


function squareArray(array) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        newArray[i] = array[i] * array[i];
    }
    return newArray;
}

console.log(squareArray([1, 2, 3]));


function doubleArray(array) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        newArray[i] = 2 * array[i];
    }
    return newArray;
}

console.log(doubleArray([1, 2, 3]));


function transformArray(array, transformation) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        newArray[i] = transformation(array[i]);
    }
    return newArray;
}

function square(n) {
    return n * n;
}

function double(n) {
    return 2 * n;
}

console.log(transformArray([1, 2, 3], square));
console.log(transformArray([1, 2, 3], double));

function addOne(n) {
    return n + 1;
}

console.log(transformArray([1, 2, 3], addOne));

console.log(transformArray([1, 2, 3], function (n) { return n + 1 }));