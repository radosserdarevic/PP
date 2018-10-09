// // Zadatak 1

// var a = [5, -4.2, 3, 7];
// var e = 3;
// var i;

// for ( i = 0; i < a.length; i++){
//     if (a[i] == e) {
//         console.log(e + " je deo niza");
//         break;

//     }

// }


// // Zadatak 2

// var a = [-3, 11, 5, 3.4, -8]
// var pro;

// for ( i = 0; i < a.length; i++){
//     if (a[i]> 0){
//         a[i] = a[i]*2;
//     }
// }
// console.log(a);

// // Zadatak 3

// var a = [4, 2, 2, -1, 6];
// var min = a[0];
// var y;

// for ( var i = 1; i < a.length; i++) {
//     if ( a[i] < a[0]) {
//         min = a[i];
//         y = i
//     }
// }
// console.log(min, y);


// // // Zadatak 4

// var a = [2, 3, 2, 5, 6];
// var min = a[0];
// var min2 = +Infinity;
// var i, tmp;

// for (i = 1; i < a.length; i++) {
//     if (a[i] < min && min2) {
//         tmp = min;
//         min = a[i];
//         min2 = tmp;
//     } else if (a[i] < min2) {
//         min2 = a[i];
//     }
// }
// console.log(min2);

// // Zadatak 5

// var a =  [3, 11, -5, -3, 1];
// var sum = 0;
// var i;

// for ( i = 0; i < a.length; i++) {
//     if ( a[i] > 0) {
//         sum = sum + a[i];
//     }
// }
// console.log(sum);

// // // Zadatak 6

// var a = [2, 4, -2, 7, -2, 4, 2];
// var i;
// var rez = "";

// for (i = 0; i < a.length; i++) {
//     if ( a[i] == a[a.length - i-1] ) { 
//         rez = "Jeste";
//     }else {
//         rez = "Nije"
//         break;
//     }
// }
// console.log(rez);

// //Zadatak 7

// var a = [4, 5, 6, 2]; 
// var b = [3, 8, 11, 9];
// var i,j;
// var sum = [];

// for (i = 0; i< a.length; i++) {
//     sum[i*2]=a[i];
//     sum[i*2+1]=b[i];
// }
// console.log(sum);


// // Zadatak 8


// var a = [4, 5, 6, 2]; 
// var b = [3, 8, 11, 9];
// var i,j;
// var sum = [];

// for (i = 0; i< a.length; i++) {
//     sum[i]=a[i];
//     sum[i+a.length]=b[i];
// }
// console.log(sum);

// Zadatak 9

// var a = [4, 6, 2, 8, 2, 2];
// e = 2;
// var i, j;
// var novi = [];

// for (i = 0, j = 0; i < a.length; i++ , j++) {
//     if (a[i] !== e) {
//         novi[j] = a[i];
//     } else {
//         j--
//     }
// }
// console.log(novi);