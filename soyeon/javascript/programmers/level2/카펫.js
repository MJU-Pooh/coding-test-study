// 갈색과 노란색 타일의 수를 알고 있을 때
// 전체 카펫의 크기를 [가로, 세로] 형태로 리턴
// 항상 가로길이가 세로길이 보다 길거나 같아야 함

// 두 수를 곱해서 노란색 개수가 나오는 쌍을 찾음
// 노랑이 24개라고 하면 6*4가 될 수 있음
// 갈색이 노랑을 감싸므로 노랑의 가로, 세로에 2씩 더해주면 됨

function solution(brown, yellow) {
  var answer = [];

  for (let i = 1; i < yellow + 1; i++) {
    // 노란색 부분의 가로, 세로
    let x = i;
    let y = yellow / i;
    let brown_area = (x + 2) * (y + 2);
    if (x >= y && brown_area === brown + yellow) {
      answer.push(x + 2);
      answer.push(y + 2);
      break;
    }
  }
  return answer;
}
