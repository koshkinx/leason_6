// 1) Створити функцію яка отримує невизначену кількість аргументів, вираховує їх суму і повертає результат обчислень

// function plus(...sum) {
//   let number = 0;
//   for (let i = 0; i < sum.length; i++) {
//     number = sum[i] + number;
//   }
//   return console.log(number);
// }
// plus(1, 2, 3, 4, 5);

// 2)Створити функцію яка отримує від користувача день народження,місяць, рік і повертає вік користувача і якщо сьогодні
//  день народження користувача то вивести привітання.

// let Time = new Date();

// function birthdayDate(DD, MM, YYYY) {
//   if (
//     arguments[0] - Time.getDate() == 0 &&
//     arguments[1] - Time.getMonth() == 0
//   ) {
//     console.log(`Happy Birthday!!!`);
//   } else {
//     let FullYears = Time.getFullYear() - arguments[2] - 1;
//     console.log(`Вам повних ${FullYears} років`);
//   }
//   return;
// }

// birthdayDate(
//   prompt("введіть день"),
//   prompt("введіть місяць(число)"),
//   prompt("введіть рік")
// );

// 3) Модифікуват завдання 2 добавивши в аргументи функцію вітання яка буде використанна як колбек, і в разі дня народження буде вітати користувача

// function time(a, b, c, callback) {
//   let Final = `${callback(a, b, c)}`;

//   if (callback[a] - Time.getDate() == 0 && callback[b] - Time.getMonth() == 0) {
//     let congrat = console.log(`щастя та здоров'ячка`);
//   }
//   return;
// }

// time(07, 00, 1989, birthdayDate);

// 4) Створити функцію яка повертає сторіччя, функція отримує рік а повертає номер сторіччя. Наприклад:
// 1810->19
// 1700 -> 17
// 1601 ->17
// 2000 -> 20

// function xxl() {
//   let year = parseFloat(
//     prompt("введіть piкбщоб дізнатись яке сторіччя", "YYYY")
//   );
//   if (year <= 100) {
//     alert("1 сторіччя");
//   } else if (year <= 200) {
//     alert("2 сторіччя");
//   } else if (year <= 300) {
//     alert("3 сторіччя");
//   } else if (year <= 400) {
//     alert("4 сторіччя");
//   } else if (year <= 500) {
//     alert("5 сторіччя");
//   } else if (year <= 600) {
//     alert("6 сторіччя");
//   } else if (year <= 700) {
//     alert("7 сторіччя");
//   } else if (year <= 800) {
//     alert("8 сторіччя");
//   } else if (year <= 900) {
//     alert("9 сторіччя");
//   } else if (year <= 1000) {
//     alert("10 сторіччя");
//   } else if (year <= 1100) {
//     alert("11 сторіччя");
//   } else if (year <= 1200) {
//     alert("12 сторіччя");
//   } else if (year <= 1300) {
//     alert("13 сторіччя");
//   } else if (year <= 1400) {
//     alert("14 сторіччя");
//   } else if (year <= 1500) {
//     alert("15 сторіччя");
//   } else if (year <= 1600) {
//     alert("16 сторіччя");
//   } else if (year <= 1700) {
//     alert("17 сторіччя");
//   } else if (year <= 1800) {
//     alert("18 сторіччя");
//   } else if (year <= 1900) {
//     alert("19 сторіччя");
//   } else if (year <= 2000) {
//     alert("20 сторіччя");
//   } else if (year <= 2100) {
//     alert("21 сторіччя");
//   } else if (year >= 2101) {
//     alert("а це вже друга історія");
//   } else {
//     alert("до побачення");
//   }
// }
// xxl();

const years = parseInt(
  prompt("введіть piк щоб дізнатись яке сторіччя", "YYYY")
);

function xxl(year) {
  return Math.ceil(year / 100);
}
xxl(years);
console.log(xxl(years));
// 5) Створити функцію яка повертає інформацію скільки днів в цьому місяці а також в наступному  ( В цьому місяці 30 днів в наступному 31 )

// function daysInMonth(month, year) {
//   let w = new Date(year, month + 1, 0).getDate();
//   let x = new Date(year, month, 0).getDate();
//   return [w, x];
// }
// console.log(daysInMonth(2, 2019));
