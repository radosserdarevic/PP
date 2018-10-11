/*

Write a program to insert a string within a string at a particular position (default is 1, beginning of a string).

"My random string", "JS " -> "JS My random string"
"My random string", "JS ", 10 -> "My random JS string"
*/

function insertString(str1, str2, n) {
  var i;
  var result = "";
  for (var i = 0; i < str1.length; i++) {
    if (i == n) {
      result += str2;
    } else {
      result += str1[i];
    }
  }
  return result;
}
console.log(insertString("My random string", "JS ", 10));

/* Write a program to join all elements of the array into a string skipping elements that are
 undefined, null, NaN or Infinity.

[NaN, 0, 15, false, -22, '', undefined, 47, null] */
