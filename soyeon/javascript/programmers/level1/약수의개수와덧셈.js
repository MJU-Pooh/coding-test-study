function solution(left, right) {
  var answer = 0;

  for (let i = left; i < right + 1; i++) {
    let cnt = 0; // 약수 개수
    for (let idx = 1; idx < i + 1; idx++) {
      if (i % idx == 0)
        // idx로 나누어 떨어지면 idx는 i의 약수
        cnt++;
    }
    if (cnt % 2 == 0) {
      // 약수의 개수가 짝수면 더하고
      answer += i;
    } else {
      // 아니면 뺌
      answer -= i;
    }
  }
  return answer;
}

/* 
참고 
Math.sqrt(num)을 통해 제곱근을 구했을 때 제곱근이 정수면 
약수의 개수가 홀수인걸 활용하면 코드를 줄일 수 있음
*/
