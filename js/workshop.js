// import { galleryItems } from './gallery-items.js';
const words = "hello how old are you";
const wordsz = "hello world how old are you";

function toUpperFirst(str) {
  return str.split(" ").map((el) => el[0].toUpperCase() + el.slice(1));
}

console.log(toUpperFirst(wordsz).join(" "));

console.log(words);

for (let word of words) {
  word.toUpperCase();
}
console.log(words);

// ---------------------
// function dataIterate (parameter) {
//     return parameter.map(dataObj => Object.entries(dataObj)
//     .forEach(([key,value]) => console.log(`${key} is ${value}`)));

// }
// dataIterate(galleryItems)

// const word = "dfr";
// const wr = ["123", "ddd", "fff"];
// console.log(word[1]);
// console.log(wr[1]);

function ucFirst(par) {
  return par[0].toUpperCase() + par.slice(1);

  //   return par[0].toUpperCase() + par.slice(1);
}
console.log(ucFirst("василь"));
//
let str1 = "Віджет з ідентифікатором";
console.log(str1.indexOf("ет", 8));
console.log(str1[1]);
console.log(str1[2]);
//
// indexof(sibsrting, position)
let str = "Хитрий, як лисиця, сильний, як Як";
let target = "як"; // давайте знайдемо це
const targeting = "тр";
//-1-//
// let pos = 0;
// while (true) {
//   let find = str.indexOf(target, pos);
//   if (find == -1) break;
//   console.log(find);
//   pos = find + 1;
// }
//-2-//
let pos = -1;
while ((pos = str.indexOf(target, pos + 1)) != -1) {
  console.log(pos);
}

if (str.includes(target)) {
  console.log("include");
}

if (str.includes(targeting, 10)) {
  console.log("include");
} else {
  console.log("doesnt include");
}
//slice()
let strr = "stringify";
console.log(strr.slice(1)); //копія
console.log(strr.slice(0, 3));
console.log(strr.slice(-2));
//
function upperFirst(par) {
  return par[0].toUpperCase() + par.substring(1);
}

console.log(upperFirst("василь"));
//
// function checkSpam(par) {

//   if (
//     par.toLowerCase().includes("xxx") ||
//     par.toLowerCase().includes("viagra")
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// }

function checkSpam(str) {
  let lowerStr = str.toLowerCase();

  return lowerStr.includes("viagra") || lowerStr.includes("xxx");
}

console.log(checkSpam("buy ViAgRA now"));
console.log(checkSpam("free xxxxx"));
console.log(checkSpam("innocent rabbit"));
///
console.log("-------------------------");
///
// function truncate(str, number) {
//   if (!str) {
//     console.log("Input srting");
//     return;
//   } else if (str.length <= number) {
//     console.log(`string lenght ${str.length} is ok: ${str} `);
//     return;
//   } else {
//     //   const result = str.slice(0, number) + "...";
//     console.log("slice:", str.slice(0, number) + "...");
//     console.log("substring:", str.substring(number, 0) + "...");
//   }
// }
function truncate(str, number) {
  return str.length > number ? str.slice(0, number) + "..." : str;
}

console.log(truncate("Що я хотів би розповісти на цю тему:", 20));
console.log(truncate("Всім привіт!", 20));
console.log("-------------------------");

function extractCurrencyValue(str) {
  console.log(+str.slice(1));
}

extractCurrencyValue("$120");
