function solution(n) {
  let part = [];
  for (let i = 1; i < n + 1; i++) {
    if (n % i == 0) {
      part.push(i);
    }
  }
  let sum = part.reduce((a, b) => a + b, 0);
  return sum;
}

/** 
reduce함수의 인수
- accumulator: 콜백 함수 반환값을 누적
- currentValue: 배열의 현재 요소
- index(Optional): 배열의 현재 요소의 인덱스
- array(Optional): 호출한 배열
**/
