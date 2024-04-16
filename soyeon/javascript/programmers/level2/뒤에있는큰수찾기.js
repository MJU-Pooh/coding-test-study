// 각 원소들에 대해 자신보다 뒤에 있는 숫자 중
// 자신보다 크면서 가장 가까이 있는 수를 뒷 큰 수라고 함
// 모든 원소에 대한 뒷 큰 수들을 담은 배열을 리턴
// 뒷 큰 수가 없을 경우 -1

function solution(numbers) {
  let answer = [];
  let stack = [];

  // numbers의 뒤의 숫자부터
  // 배열이 남아있는 동안 반복
  while (numbers.length) {
    // 스택에 담긴 값이 없으면 현재 값이 가장 큼
    if (stack.length === 0) {
      answer.push(-1);
      // numbers에서 제거하고 스택에 추가
      stack.push(numbers.pop());
    } else {
      // 스택에 담긴 값이 있으면
      // 비교해서 가장 가까이 있는 큰 수를 찾으면 됨
      if (stack[stack.length - 1] > numbers[numbers.length - 1]) {
        // 스택의 뒤의 원소가 가장 가까운 원소이므로 거꾸로 보았을 때
        // 현재 원소보다 큰 값이 나오면 스택에 추가하고 numbers에서 제거
        answer.push(stack[stack.length - 1]);
        stack.push(numbers.pop());
      } else {
        // 가까운 값이 없다면
        // 스택에서 하나씩 원소를 제거하면서 가까운 원소 순으로
        // 비교함
        stack.pop();
      }
    }
  }
  return answer.reverse();
}
