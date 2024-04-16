// k와 d가 주어질 때 원점으로부터 x축 방향으로 a*k, y축 방향으로 b*k만큼 떨어진 위치에 점을 찍는다
// 원점과 거리가 d를 넘는 위치에는 점을 찍지 않는다

// Math.pow(a, b) : a의 b승 (거듭제곱 계산)
// Math.floor(4.3) : 소수점 이하 숫자를 버려줌 => 4 리턴
// Math.floor(-4.3) : 소수점 이하 숫자를 버려줌 => 음수값이면 내림을 해서 -5 리턴

function solution(k, d) {
  let answer = 0;

  // 거리가 d를 넘지 않도록 가능한 모든 점의 자취를 그려보면
  // 곧 원이 그려지게 됨 (원의 방정식: x^2 + y^2 = d^2)
  // 우리는 거리에 해당하는 d를 알고 있으므로 x값이 정해지면 자연스럽게 y값을 알 수 있다.

  // x좌표 값에 따라 y값을 계산
  for (let x = 0; x <= d; x += k) {
    const max_y = Math.sqrt(d ** 2 - x ** 2);
    // y의 최대값 안에서 찍히는 점의 개수
    answer += Math.floor(max_y / k) + 1;
  }
  return answer;
}
