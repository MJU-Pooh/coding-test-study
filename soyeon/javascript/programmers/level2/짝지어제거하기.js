// 문자열에서 같은 알파벳이 2개 붙어 있는 짝을 찾음
// 그 둘을 제거한 뒤 앞뒤로 문자열을 이어 붙임
// 위 과정 반복해서 문자열이 모두 제거되면 종료
// 성공적으로 수행하면 1, 아니면 0을 리턴

// 예전에 풀었던 스택 문제와 비슷
function solution(s) {
  let arr = s.split("");
  let stack = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] == stack[stack.length - 1]) {
      stack.pop();
    } else {
      stack.push(arr[i]);
    }
  }

  if (stack.length != 0) {
    return 0;
  }
  return 1;
}
