
//isNaN

function ourNaN(n) {
  return typeof n == "number" && n != n;
}

//3

var test = [NaN, 0, 15, false, -22, "", undefined, 47, null];
function filterOut(aos) {
  var narr = [];
  var i, ind;
  var res;
  for (i = 0, ind = 0; i < aos.length; i++) {
    res = aos[i]; //* 1;
    if (
      res !== undefined &&
      res !== Infinity &&
      !isNaN(res) &&
      res !== 0 &&
      res !== ""
    ) {
      narr[ind] = res * 1;
      ind++;
    }
  }
  return narr;
}

var res = filterOut(test);
console.log(res);

//4

function reverse(n) {
  var num = n;
  var last_number;
  var ind = 0;
  var arr = [];
  var resnum = 0;

  while (num != 0) {
    last_number = n % 10;
    arr[ind] = last_number;
    ind++;
    num = (num - last_number) / 10;
  }

  for (var i = 0; i < arr.length; i++) {
    resnum += Math.pow(10, i) * arr[arr.length - 1 - i];
  }
  return resnum;
}

var res = reverse(12345);
console.log(res);

//5 

var arr = [7, 9, 0, -2];
function returnLast(a, n = 1) {
  var i, j;
  var niz = []
  for (i = a.length - n, j = 0; i < a.length; i++ , j++) {
    niz[j] = a[i];
  }
  return niz;
}

var res = returnLast(arr, 2);
console.log(res);

//6 

function specifiedNumber(n, val = null) {
  var arr = [];
  for (var i = 0; i < n; i++) {
    arr[i] = val;
  }
  return arr;
}

var res = specifiedNumber(6, 0);
console.log(res);

//7 perfect number

function perfect(n) {
  var sum = 0;
  for (var i = 1; i <= n / 2; i++) {
      if (n % i == 0) {
          sum += i;
      }
  }
  if (sum == n) {
      return true;
  } else {
      return false;
  }

  //return sum == n;
}

for (var i = 0; i < 1000; i++) {
  if (perfect(i)) {
      console.log(i);
  }
}

//8

// Write a function to find a word within a string.

// 'The quick brown fox', 'fox' -> "'fox' was found 1 times"
// 'aa, bb, cc, dd, aa', 'aa' -> "'aa' was found 2 times"



//9 

var email = "myemailaddress@bgit.rs";
function hideEmail(e) {
  var ind;
  var s = '';
  var arr = [];
  for (var i = 0; i < e.length; i++) {
    arr[i] = e[i];
  }
  for (var i = 0; i < e.length; i++) {
    if (arr[i] == '@') {
      ind = i
    }
  }
  for (var i = ind - 1; i > 4; i--) {
    arr[i] = '.';
  }
  for (var i = 0; i < e.length; i++) {
    s += arr[i];
  }
  return s;
}

var e = hideEmail(email);
console.log(e);

//10 

var arr = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
function mostFrequent(a) {
  var mostmost = 0;
  var mostind;
  for (var i = 0; i < a.length; i++) {
    for (var j = 0; j < a.length; j++) {
      var most = 0;
      if (a[i] == a[j]) {
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

var res = mostFrequent(arr);
console.log(res);

