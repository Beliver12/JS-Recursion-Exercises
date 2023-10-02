// Loop version

function fib(n) {
  let firstNum = 0;
  let secondNum = 1;
  let sum;
  const arr = [0, 1];
  for (let i = 2; i < n; i++) {
    sum = firstNum + secondNum;
    firstNum = secondNum;
    secondNum = sum;
    arr.push(sum);
  }
  return arr;
}

console.log(fib(8));

// Recursive version

function fibsRec(n, arr = [0, 1]) {
  if (arr.length === n) {
    return arr;
  }

  arr.push(arr.at(-1) + arr.at(-2));
  return fibsRec(n, arr);
}

console.log(fibsRec(8));
