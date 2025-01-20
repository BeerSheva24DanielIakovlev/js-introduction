// //numbers
// //var is not used  
// //let
// //const
// let a = 10;
// a = 10 / 3;

// a = Math.trunc(a);
// a **=2;
// const str = "12.35a";
// a = parseInt(str,8);
// a = a.toString();
// function square(num) {
//     return num ** 2;
// }
// a = square(10);
// str[1] = '*';
// //узнать как пишутся функции в js
// for(let i = 0; i < str.length; i++) {
//     console.log(str[i]);
// }
// //HW tast
// //To write function myIntParse simulating parseInt but only with decimal computation system
// a = parseInt("a1");

// function myIntParse(str) {
//     let result = 0;          // Переменная для накопления результата
//     let isNegative = false;  // Флаг для отслеживания отрицательного числа

//     for (let i = 0; i < str.length; i++) {
//         let char = str[i];
//         if (i === 0 && char === '-') { // Проверка на отрицательное число
//             isNegative = true;
//             continue;
//         }

//         let digit = char.charCodeAt(0) - '0'.charCodeAt(0); // Преобразуем символ в число
//         if (digit < 0 || digit > 9) break; // Если символ не цифра, прекращаем разбор

//         result = result * 10 + digit; // Формируем число
//     }

//     return isNegative ? -result : result; // Учитываем знак числа
// }

// // Примеры вызова:
// console.log(myIntParse("1234"));   // 1234
// console.log(myIntParse("-567"));   // -567
// console.log(myIntParse("12a34"));  // 12
// console.log(myIntParse("a123"));   // 0

