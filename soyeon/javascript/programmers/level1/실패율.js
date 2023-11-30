// 카카오 2019 블라인드 채용
// 실패율: 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수
// N: 전체 스테이지의 수
// stages: 사용자가 현재 멈춰있는 스테이지의 번호가 담긴 배열
// 실패율이 높은 스테이지부터 내림차순으로 스테이지의 번호가 담겨있는 배열 리턴

function solution(N, stages) {
  var answer = [];
  let fail = []; // 각 스테이지의 실패율
  let cnt = 0; // 도전한 스테이지 수
  let stay = 0; // 도전한 스테이지 중 클리어하지 못한 수

  for (let i = 1; i < N + 1; i++) {
    for (let j = 0; j < stages.length; j++) {
      if (i == stages[j]) {
        stay++;
      }
      if (i <= stages[j]) {
        cnt++;
      }
    }
    fail.push({ stageNum: i, rate: stay / cnt });
    stay = 0;
    cnt = 0;
  }
  // 내림차순 정렬
  fail.sort((a, b) => b.rate - a.rate);
  // 정렬된 순서대로 스테이지 번호만 가져와서 answer배열 push
  fail.map((num) => answer.push(num.stageNum));

  return answer;
}
