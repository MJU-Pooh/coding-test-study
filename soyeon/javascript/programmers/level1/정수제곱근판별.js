function solution(n) {
  // n의 제곱근을 구해주는 sqrt함수 사용
  let n_sqrt = Math.sqrt(n);

  // n_sqrt가 정수인지 아닌지 파별
  // 정수면 +1의 제곱값 아니면 -1 리턴
  if (Number.isInteger(n_sqrt)) {
    return (n_sqrt + 1) ** 2;
  } else {
    return -1;
  }
}
