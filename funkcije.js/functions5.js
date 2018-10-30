
//1

var arr = [3, 500, 12, 149, 53, 414, 1, 19];

function minmax(a) {
    var min = a[0];
    var max = a[0];
    var minind = 0, maxind = 0;
    var tmp, tmpind;
    for (var i = 1; i < a.length; i++) {
        if (min > a[i]) {
            min = a[i];
            minind = i;
        }
        if (max < a[i]) {
            max = a[i];
            maxind = i;
        }
    }
    tmp = a[minind];
    a[minind] = a[maxind];
    a[maxind] = tmp;
    return a;
}

console.log(arr);
var niz = minmax(arr);
console.log(niz);

//2

var niz = [3, 500, -10, 149, 53, 414, 1, 19];
function noviNiz(a) {
    var b = [];
    for (var i = 0; i < a.length; i++) {
        b[i] = a[i] / 2 + 5;
        if (b[i] == 0) {
            b[i] == 20;
        }
    }
    return b;
}
var arr = noviNiz(niz);
console.log(arr);

//3

var studentNiz = ['John', 'Ana', 'Filip', 'Rose'];
var studentGrades = [67, 89, 93, 77];

function student(a, b) {
    var studentName;
    var grade;
    var res = '';
    for (var i = 0; i < a.length; i++) {
        if (b[i] > 50 && b[i] <= 60) {
            studentName = a[i];
            grade = 6;
        }
        if (b[i] > 60 && b[i] <= 70) {
            studentName = a[i];
            grade = 7;
        }
        if (b[i] > 70 && b[i] <= 80) {
            studentName = a[i];
            grade = 8;
        }
        if (b[i] > 80 && b[i] <= 90) {
            studentName = a[i];
            grade = 9;
        }
        if (b[i] > 90 && b[i] <= 100) {
            studentName = a[i];
            grade = 10;
        }
        res += studentName + ' -> ' + grade + '\n';
    }
    return res;
}

var result = student(studentNiz, studentGrades);
console.log(result);

//6

function allNumbers() {
    var i;
    var even = 0;
    var odd = 0;

    for (i = 1; i <= 1000; i++) {
        if (i % 2 == 0) {
            even += i;
        }
    }
    for (i = 1; i <= 500; i++) {
        if (i % 2 == 1) {
            odd += i;
        }
    }
    return (even - odd) * 12.5;
}
var final = allNumbers();
console.log(final);

//7

var str = ["M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A"];

function takeTwo(a) {
    var result;
    finalResult = '';
    for (var i = 0; i < a.length; i++) {
        if (typeof a[i] === 'string' && a[i].length > 2) {
            result = a[i];
            for (var j = 0; j < 2; j++) {
                finalResult += result[j];
                // finalResult += result[0] + result[1];
            }
        }
    }
    return finalResult;
}

var take = takeTwo(str);
console.log(take);

//8

function reverse(s) {
    var i;
    var res = "";
    for (i = s.length - 1; i >= 0; i--) {
        res += s[i];
    }
    return res;
}
var newString = reverse("Belgrade Institute of Technology");
console.log(newString);

//9

function allCombinations() {
    var result = '';
    for (var i = 1; i < 5; i++) {
        for (var j = 1; j < 5; j++) {
            if (i != j) {
                result += i + ' ' + j + '\n';
            }
        }
    }
    return result;
}

var res = allCombinations(1);
console.log(res);

//10 

var number = 113;
function prime(a) {
    if (a < 0) {
        return false;
    }
    for (var i = 2; i <= a / 2; i++) {
        if (a % i == 0) {
            //console.log(i);
            return false;
        }
    }
    return true;
}

var res = prime(number);
console.log(res);

//11

function palindrome(a) {
    var i;
    var j;
    var res = true;
    for (i = 0; i < a.length; i++) {
        for (j = a.length; j >= 0; j--) {
            if (a[i] != a[j]) {
                res = false;
                break;
            }
        }
    }
    return res;
}

var final = palindrome("erre");
console.log(final);

var s = 'anavolimilovana';

function palindrom() {
    var i;
    var j;
    var pal = true;

    for (i = 0, j = s.length - 1; pal && i < j; i++ , j--) {
        if (s[i] != s[j]) {
            pal = false;
        }
    }
    return pal;
}

var final = palindrom(s);
console.log(final);

//12

function greatest(a, b) {

    var i;
    var j;
    maxDivisorA = 0;
    maxDivisorB = 0;
    var res;

    for (i = 2; i < a / 2; i++) {
        if (a % i == 0) {
            maxDivisorA = i;
        }
        for (j = 2; j < b / 2; j++) {
            if (b % j == 0) {
                maxDivisorB = j;
            }
            if (maxDivisorA == maxDivisorB) {
                res = maxDivisorA;
            }
        }
    }
    return res;
}

var max = greatest(192, 42);
console.log(max);




