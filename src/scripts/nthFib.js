//Можно через формулу Бине ака рекурентную, этот способ быстрее всего, но на больших n потери точности + переполнение максимального значения стандартных чисел JS

const phi = (1 + Math.sqrt(5)) / 2;

function nthFibo1(order) {
  return order === 1
    ? 0
    : order === 2
    ? 1
    : Math.round(
        (phi  (order - 1) - (1 - phi)  (order - 1)) / Math.sqrt(5)
      );
}

console.log(nthFibo1(2));
console.log(nthFibo1(4));
console.log(nthFibo1(1));

//Итеративный (медленнее, но целочисленный)

function nthFibo2(order) {
  if (order === 1 || order === 2) return 1;
  let a = 1,
    b = 1,
    c;
  for (let i = 3; i <= order; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  return c;
}

console.log(nthFibo2(2));
console.log(nthFibo2(4));
console.log(nthFibo2(1));