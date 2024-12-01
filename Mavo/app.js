const num = 6;
let what = 0;
what += Number(num % 2 === 0 || num % 3 === 0 || num % 5 === 0);
what += Number(
  (num % 2 === 0 && num % 3 === 0) ||
    (num % 5 === 0 && num % 3 === 0) ||
    (num % 5 === 0 && num % 2 === 0)
);
what += Number(num % 2 === 0 && num % 3 === 0 && num % 5 === 0);
what !== 0 && console.log(what);
