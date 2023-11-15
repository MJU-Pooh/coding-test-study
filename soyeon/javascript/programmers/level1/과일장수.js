// 상자에 m개의 사과를 담아 포장
// 사과들 중 가장 낮은 점수가 p, 한 상자의 가격은 p*m
// k: 사과의 최대 점수, m: 한 상자에 들어가는 사과의 수, score: 사과들의 점수
// 최대 이익 계산

function solution(k, m, score) {
  var answer = 0;

  // 내림차순
  score.sort((a, b) => b - a);

  // 점수가 높은 사과들부터 상자에 m개씩 넣어서 포장
  for (let i = 0; i < score.length; i += m) {
    let box = score.slice(i, i + m);
    // 한 상자에 사과가 다 찾을 경우에만 점수 계산
    if (box.length == m) {
      answer += box[m - 1] * m;
    }
  }
  return answer;
}
