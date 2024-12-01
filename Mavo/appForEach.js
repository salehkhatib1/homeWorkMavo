// const arr1 = [1, 2, 3, 4];
// const arr2 = [1, 2, 3, 4];
// let sum = 0;
// arr1.forEach((elem) => {
//   sum += elem ** 2;
// });
// console.log(sum);

// const arr = ["qwe", "wer", "ert"];

// let res = arr.map((elem) => elem + "!");
// console.log(res);

// function reverse(str) {
//   return str.split("").reverse().join("");
// }

// console.log(reverse("qwe"));

// let arr = [20, 3, 12, 6, 22, 1, 23];

// let res = arr.filter((el, idx) => el * idx < 30);

// console.log(res);

// const users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 44 },
//   { name: "Saleh", age: 12 },
// ];

// console.log(users.every((elem) => elem.age > 18));

const numbers = [10, 20, 30, 40, 50];

let [a, b, ...rest] = numbers;

console.log(a);
console.log(b);
console.log(rest);
