function isPrimary(x) {
  if (x < 2) return false;
  if (x === 2) return true;
  for (let i = 2; i <= Math.sqrt(x); i++) {
    if (x % i === 0) {
      return false;
    }
  }
  return true;
}

for (let i = 2; i < 237; i++) {
  isPrimary(i) && console.log(i);
}
