// 1미터씩 n개의 구역으로 나눔. 각 구역의 왼쪽부터 1번~n번
// 페인트를 칠하는 롤러의 길이 m
// 다시 칠하기로 한 구역(section)은 적어도 한 번 페인트칠을 해야함
// 최소 횟수 출력

function solution(n, m, section) {
  var answer = 0;
  let wall = [];

  // false가 다시 칠해야 하는 벽
  for (let i = 0; i < n; i++) {
    if (section.includes(i + 1)) {
      wall.push(false);
    } else {
      wall.push(true);
    }
  }

  let start = section[0] - 1;

  for (let i = start; i < n; i++) {
    // (false라면)m개씩 칠함
    // 다 칠해졌으면 바로 answer 리턴
    if (!wall[i]) {
      wall[i] = true;
      answer++;
      i += m - 1;
    }
  }
  return answer;
}
