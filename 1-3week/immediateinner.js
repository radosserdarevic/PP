function sum(a, b) {
    return a + b;
}

var result = sum(4, 5);
console.log(result);


var result = (function (a, b) {
    return a + b;
})(4, 5);

console.log(result);


(function () { })();


(function () { }());


function sum4(num1, num2, num3, num4) {

    function sum2(a, b) {
        return a + b;
    }

    //return sum1 + sum2 + sum3 + sum4;
    return sum2(sum2(num1, num2), sum2(num3, num4));
}

//sum2(4, 5);
console.log(sum4(4, 5, 6, 7));


function outer(a, b) {
    function inner(c) {
        return a + b + c;
    }
    console.log(inner(6));
}

outer(4, 5);
//console.log(outer(4, 5));


function outer() {
    ///var inner = function () {
    inner = function () {
        //function inner() {
        console.log("Inner");
    }
    inner();
    console.log("Outer")
}

outer();

//inner();


