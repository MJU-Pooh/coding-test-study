// 짝수번째 알파벳은 대문자로
// 홀수번째 알파벳은 소문자로

function solution(s) {
  let answer = "";
  let word = s.split(" ");

  for (let i = 0; i < word.length; i++) {
    for (let j = 0; j < word[i].length; j++) {
      if (j % 2 == 0) {
        // 짝수번째
        answer += word[i][j].toUpperCase();
      } else {
        // 홀수번째
        answer += word[i][j].toLowerCase();
      }
    }
    // 문자열 기존 공백 추가
    if (i < word.length - 1) {
      answer += " ";
    }
  }
  return answer;
}
