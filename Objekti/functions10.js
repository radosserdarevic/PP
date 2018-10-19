// 1.Write IIFE that replaces the first and the last element of the given array and prints out its elements. 
// 	Input array: [4, 5, 11, 9]
// 	Output array: [ 9, 5, 11, 4]

// var result;
// result = (function (array) {
//     var temp;
//     temp = array[0];
//     array[0] = array[array.length - 1];
//     array[array.length - 1] = temp;
//     return array;
// })([4, 5, 11, 9]);
// console.log(result);



// 2.Write IIFE that calculates the surface area of the given rectangle with sides a and b. 
// Input: 4 5
// Output: 20

// var result;
// result = (function (a, b) {
//     return a * b;
// })(4, 5);
// console.log(result);


// 3.Write IIFE that replaces all appearances of the letters m or M with * and returns the number of replacements. 
// 	Input: prograMming
// 	Output: progra**ing, 2

// (function (string) {
//     var newString = "";
//     var numOfReplaces = 0;
//     for (i = 0; i < string.length; i++) {
//         if (string[i] == "m" || string[i] == "M") {
//             newString += "*";
//             numOfReplaces++;
//         } else {
//             newString += string[i];
//         }
//     }
//     console.log(newString, numOfReplaces);
// })("prograMming");


// 4.Write a function with parameters name and surname that returns a function that suggests an email in the form name.surname@gmail.com. 
// Input: pera peric
// 	Output: pera.peric@gmail.com

// function emailMaker(){
//     function mail(name, surename){
//         console.log(name + "." + surename + "@gmail.com");
//     }
//     return mail; 
// }

// var result = emailMaker();
// result("ivan", "balic");

// 5.Write a function that returns a function that calculates a decimal value of the given octal number. 
// Input: 034
// Output: 28

// function octalToDec(){

//     function transform(oct){
//         console.log(parseInt(oct, 8));
//     }
//     return transform;
// }
// var result = octalToDec();
// result(034);


// 6.Write a function that checks if a given string is valid password. The password is valid if it is at least 6 characters long and contains at least one digit. The function should receive two callbacks named successCallback and errorCallback that should be called in case password is correct or invalid. 
// Input: JSGuru 
// Output: Your password is invalid!
// 	Input: JSGuru123
// 	Output: Your password is cool!

// function validPasword(password, successCallback, errorCallback) {
//     var isValid = false;
//     if (password.length >= 6) {
//         for (var i = 0; i < password.length && isValid == false; i++) {
//             switch (password[i]) {
//                 case "0":
//                 case "1":
//                 case "2":
//                 case "3":
//                 case "4":
//                 case "5":
//                 case "6":
//                 case "7":
//                 case "8":
//                 case "9":
//                     isValid = true;
//             }
//         }
//     }
//     if (isValid) {
//         successCallback();
//     } else {
//         errorCallback();
//     }
// }

// validPasword("JSGuru", isValid, notValid);

// function isValid() {
//     console.log("Your password is cool!");
// }

// function notValid() {
//     console.log("Your password is invalid!");
// }

// 7.Write a function that filters elements of the given array so that they satisfy a condition given by the callback function.
// Input: [2, 8, 11, 4, 9, 3], callback function checks if the number is odd
// Output: [11, 9, 3]

// function isOdd(num){
//     if(num % 2 != 0){
//         return true;
//     } else {
//         return false;
//     }
// }

// function arrayFilter(array, check){
//     var filteredArray = [];
//     var j = 0;
//     for(var i = 0; i < array.length; i++){
//         if(check(array[i])){
//             filteredArray[j] = array[i];
//             j++;
//         }
//     }
//     return filteredArray;
// }

// var result = arrayFilter([2, 8, 11, 4, 9, 3], isOdd);

// console.log(result);




