const nums = [1, 2, 0, 8, 65, 0, 34, 0, 8, 7, 655, 3, 0];
let howManyZeros = 0;
nums.forEach((element) => {
  howManyZeros += element === 0 ? 1 : 0;
});

console.log(howManyZeros);
