// 2019 카카오 겨울 인턴십
// n-튜플: n개의 요소를 가진 튜플
// 중복이 있을 수 있고 순서를 따짐, 원소 개수는 유한함
// 원소의 개수가 n개이고 중복되는 원소가 없는 튜플이 주어질 때 집합 기호를 사용해 표현 가능
// 집합 내에서의 원소 순서는 바뀌어도 상관없음
// 특정 튜플을 표현하는 집합이 담김 문자열 s가 주어질 때 s가 표현하는 튜플을 배열에 담아 리턴

function solution(s) {
  let answer = [];

  // 문자열에서 앞뒤 괄호 자르고
  // 하나의 집합이 끝나는 },{에서 한 번 더 자르고
  // 정렬해서 이차원 배열로 바꾸기
  let tuples = s
    .slice(2, -2)
    .split("},{")
    .map((e) => e.split(",").map((e) => parseInt(e)))
    .sort((a, b) => a.length - b.length);

  // 튜플의 원소 하나의 한글자씩 비교
  // answer에 없으면 추가
  // 집합에서는 순서를 신경쓰지 않았으므로 위에서 순서대로 정렬이 필요했던 것임
  for (let i = 0; i < tuples.length; i++) {
    for (let j = 0; j < tuples[i].length; j++) {
      const temp = tuples[i][j];
      if (!answer.includes(tuples[i][j])) {
        answer.push(tuples[i][j]);
      }
    }
  }
  return answer;
}
