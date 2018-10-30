// // Zadatak 1

// var i;

// for ( i = 0; i < 15; i++) {
//     if (i % 2 === 0 ) {
//         console.log(i + " je paran");
//     }else{
//         console.log(i  +" je neparan");
//     }
    
// }

// // Zadatak 2


// var i;
// var sum = 0;

// for(i = 0; i<1000 ; i++){
//     if (i % 3 === 0 && i % 5 === 0) {
//         sum = sum + i;
//     }
// }
// console.log(sum);

// // Zadsatak 3

// var a = [2, 2, 3];
// var i;
// var sum = 0;
// var pro = 1;

// for(i = 0; i < a.length; i++){
//     sum = sum + a[i];
//     pro = pro * a[i];
// }
// console.log(sum);
// console.log(pro);

// //zadatak 4


var a = ['1', 'A', 'B', "c", "r", true, NaN, undefined];
var i;
var sum = "";

for(i = 0; i < a.length; i++){
    sum = sum + a[i];
}
console.log(sum);

// zadatak 5

// var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27]];
// var i;

// for( i = 0; i < a.length; i++){
//     for(j = 0; j < a[i].length; j++){
//         console.log(a[i][j]);
//     }
// }

// // Zadatak 6

// var i;
// var sum=0;

// for(i = 0; i < 20; i++){
//     sum = sum + i*i;
// }
// console.log(sum);

// Zadatak 7

// var a = [80, 77, 88, 95, 68];
// var i;
// var sum = 0;

// for(i = 0; i< a.length; i++){
//     sum = sum + a[i];
// }
// prosek = sum / a.length;
// console.log(prosek);
// if (prosek < 60) {
//     console.log("F");
// }else if (prosek < 70) {
//         console.log("D");
//     }else if (prosek < 80) {
//             console.log("C");
//         }else if(prosek < 90){
//             console.log("B");
//         }else if(prosek < 100){
//             console.log("A");
//         }


// Zadatak 8

// var i;

// for( i = 0; i < 100; i++){
//     if (i % 3 === 0) {
//         console.log(i + " Fizz");
//     }else if(i % 5 == 0){
//         console.log(i + " Buzz");
//     }else{
        
//         console.log(i);
//     }
// }

// Zadatak 8 - Modifikacija

// var i;

// for( i = 0; i < 100; i++){
//     if (i % 3 === 0 && i % 5 !== 0) {
//         console.log(i + " Fizz");
//     }
//     if (i % 5 === 0 && i % 3 !== 0) {
//         console.log(i + " Buzz");
//     }
//     if (i % 3 === 0 && i % 5 == 0) {
//         console.log(i + " FizzBuzz");
//     }
//     if (i % 3 !== 0 && i % 5 !== 0) {
//         console.log(i);
//     }
   
// }


var i;

for (i = 0; i < 100; i++){
    if(i % 3 == 0 && i % 5 ==0){
        console.log(i + " FizzBuzz");
    }else if(i % 3 == 0 ){
        console.log(i + " Fizz");
    }else if(i % 5 == 0){
        console.log(i + " Buzz");
    }else{

    console.log(i);}
}