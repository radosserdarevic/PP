/* 1 Write a function to check whether the `input` is a string or not.

"My random string" -> true
12 -> false*/

function checkInput(input) {
  var i;
  var result;

  if (typeof input === "string") {
    result = true;
  } else {
    result = false;
  }
  return result;
}

var print_input = checkInput(18);

console.log(print_input);

/*
2 Write a function to check whether a string is blank or not.

"My random string" -> false
" " -> true
12 -> false
false -> false
*/

function checkBlank(str) {
  var i;
  var result;

  if (str === "") {
    result = "it's blank string";
  } else {
    result = "it's NOT blank string";
  }
  return result;
}
var print_res = checkBlank("");
console.log(print_res);

/* 3
Write a function that concatenates a given string n times (default is 1).
	"Ha" -> "Ha"
"Ha", 3 -> "HaHaHa"
*/
function checkblank(str, n) {
  var i;
  var result = "";
  for (var i = 0; i < n; i++) {
    result += str;
  }
  return result;
}
var print_res = checkblank("Ha", 3);
console.log(print_res);

/* 4
Write a function to count the number of letter occurrences in a string.
"My random string", "n" -> 2
*/

function countLetter(str, letter) {
  var i;
  var count = 0;
  for (i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      count++;
    }
  }
  return count;
}

var print_res = countLetter("My random string", "n");
console.log(print_res);

/* 5
Write a function to find the position of the first occurrence of a character in a string.
 The result should be in human numeration form.
 If there are no occurrences of the character, the function should return -1.*/

function findOcc(str, letter) {
  var i;
  var result;
  for (i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      result = i + 1;
      break;
    }
  }

  return result;
}
var print_res = findOcc("My random string", "r");
console.log(print_res);

/* 6 
Write a function to find the position of the last occurrence of a character in a string.
 The result should be in human numeration form. 
If there are no occurrences of the character, function should return -1. */
function findLastOcc(str, letter) {
  var i;
  var result = -1;
  for (i = str.length - 1; i >= 0; i--) {
    if (str[i] === letter) {
      result = str.length - i;
      break;
    }
  }

  return result;
}
var print_result = findLastOcc("My random string", "i");
console.log(print_result);

/*7 
Write a function to convert string into an array. Space in a string should be represented
 as “null” in new array.

"My random string" -> ["M", "y", null, "r", "a"]
"Random" -> ["R", "a", "n", "d", "o", "m"]
*/
function con(str) {
  var i;
  var result = [];
  for (i = 0; i < str.length; i++) {
    result[i] = str[i];
    if (str[i] === " ") {
      result[i] = "null";
    }
  }
  return result;
}
var result = con("random string");
console.log(result);

/*8  nije uradjen
Write a function that accepts a number as a parameter and checks if the number is prime or not. 
Note: A prime number (or a prime) is a natural number greater than 1 that
 has no positive divisors other than 1 and itself.*/

function checkPrimeNumber(num) {
  var sum = 0;
  var i;
  for (i = 2; i <= num / 2; i++) {
    if (num % i == 0) {
      sum += i;
    }
  }
  if (sum == 0) {
    return true;
  } else {
    return false;
  }
}

var ind;
ind = checkPrimeNumber(28);
console.log(ind);

var j;
for (j = 1; j < 1000; j++) {
  ind = checkPrimeNumber(j);
  if (ind == true) {
    console.log(j);
  }
}

/* 9
Write a function that replaces spaces in a string with provided separator.
If separator is not provided, use “-” (dash) as the default separator.

    "My random string", "_" -> "My_random_string"
    "My random string", "+" -> "My+random+string"
    "My random string" -> "My-random-string"
*/

function randomstring(str, sign) {
  var i;
  var result = "";

  for (i = 0; i < str.length; i++) {
    if (str[i] == " ") {
      result += sign;
    } else {
      result += str[i];
    }
  }
  return result;
}
console.log(randomstring("some string", "-"));

/*10 Write a function to get the first n characters and add “...” at the end of newly created string.
*/

function eddDots(str, n) {
  var i;
  var result = "";
  var dots = "...";
  for (var i = 0; i < n; i++) {
    result += str[i];
  }
  result += dots;
  return result;
}
console.log(eddDots("some test", 5));

/* 11
Write a function that converts an array of strings into an array of numbers. Filter out all non-numeric values.
["1", "21", undefined, "42", "1e+3", Infinity] -> [1, 21, 42, 1000]
*/
function printNumbers(num) {
  var i;
  var result = [];
  var count = 0;
  for (i = 0; i < num.length; i++) {
    if (num[i] / num[i] === 1) {
      result[count] = num[i] * 1;
      count++;
    }
  }
  return result;
}
var print_result = printNumbers(["1", "21", undefined, "42", "1e+3", Infinity]);

console.log(print_result);

/*12 Write a function to calculate how many years there are left until retirement based on the year of birth.
 Retirement for men is at age of 65 and 
for women at age of 60. If someone is already retired, a proper message should be displayed.
*/

/* 13 Write a function to humanize a number (formats a number to a human-readable string) with
 the correct suffix such as 1st, 2nd, 3rd or 4th.
1 -> 1st
11 -> 11th

Hint: num % 100 >= 11 && num % 100 <= 13 */
