// 배열에서 3개의 수를 더해 0이 되면 +1
// 가능한 경우의 수 리턴

function solution(number) {
  let answer = 0;
  for (let i = 0; i < number.length; i++) {
    for (let j = i + 1; j < number.length; j++) {
      for (let k = j + 1; k < number.length; k++) {
        let num = number[i] + number[j] + number[k];
        if (num == 0) {
          answer += 1;
        }
      }
    }
  }
  return answer;
}

/*
js로 조합 구현
const combination = (current, start) => {
    if (current.length === 3) {
        result += current.reduce((acc, cur) => acc + cur, 0) === 0 ? 1 : 0;
        return;
    }
    for (let i = start; i < number.length; i++) {
        combination([...current, number[i]], i + 1);
    }
    }
*/
