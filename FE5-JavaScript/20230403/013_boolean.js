let x = 5;
let y = 10;

console.log(x > y); // false

// true, false 값을 and, or 연산했을 경우 반환값은 true, false
let a = true;
let b = false;

console.log(a && b);

// true, false가 아닌 값을 and, or 연산 했을 경우 단락회로평가를 하게 됩니다.
let a2 = "hello";
let b2 = " ";

console.log(a2 && b2);

console.log(Boolean("hello")); // t
console.log(Boolean("")); // f
console.log(Boolean([1, 2, 3])); // t
console.log(Boolean([])); // 말도 안되게 t
console.log(Boolean({ one: 10, two: 20 })); //t
console.log(Boolean({})); // t
console.log(Boolean(0)); // f
console.log(Boolean(-1)); // t
console.log(Boolean(undefined)); // f
console.log(Boolean(null)); // f
console.log(Boolean(NaN)); // f
