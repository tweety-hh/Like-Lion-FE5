function 제곱(x) {
  function 승수(y) {
    return y ** x;
  }
  return 승수;
}

let 제곱2 = 제곱(2); // 2 제곱해주는 함수
let 제곱3 = 제곱(3); // 3 제곱해주는 함수
let 제곱4 = 제곱(4); // 4 제곱해주는 함수

제곱(2);
제곱(3);
제곱(4);

console.log(제곱(2)(4));
