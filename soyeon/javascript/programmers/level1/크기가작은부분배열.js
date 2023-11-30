// p와 길이가 같은 t의 부분문자열 중에서
// 이 부분문자열이 나타내는 수가 p가 나타내는 수보다 작거나 같은 경우의 수

function solution(t, p) {
  var answer = 0;
  const len = p.length;

  for (let i = 0; i <= t.length - len; i++) {
    let num = Number(t.slice(i, i + len));
    if (num <= Number(p)) {
      answer++;
    }
  }
  return answer;
}
