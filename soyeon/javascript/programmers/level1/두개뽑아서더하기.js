// 서로 다른 인덱스의 두 값을 뽑아 더해야 함
function solution(numbers) {
  var answer = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      let num = numbers[i] + numbers[j];
      // 조건문 사용 안하고 Set 사용해서 중복제거 하는 방법도 있음
      if (!answer.includes(num)) {
        answer.push(num);
      }
    }
  }
  // 오름차순 정렬
  return answer.sort((a, b) => a - b);
}
