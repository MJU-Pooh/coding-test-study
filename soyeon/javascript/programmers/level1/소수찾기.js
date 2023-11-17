// 에라토스테네스의 체 알고리즘 사용해야 시간초과 안남

function solution(n) {
  let arr = [0, 0];
  // 배열 생성
  for (let i = 2; i < n + 1; i++) {
    arr[i] = i;
  }

  for (let i = 2; i < n + 1; i++) {
    if (arr[i] === 0) continue;
    // ex) 2는 소수임. 2를 남기고 2의 배수인 4, 6, 8--을 0으로 바꿈
    // 소수가 아니면 0으로 바뀜
    for (let j = i * 2; j < n + 1; j += i) {
      arr[j] = 0;
    }
  }

  // 0이 아닌 수들만 filter해서 길이를 반환
  return arr.filter((num) => num != 0).length;
}
