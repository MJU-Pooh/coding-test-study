// 양 끝에서 두 선수가 음식을 먹기 시작
// 중앙에 있는 물을 먼저 먹는 선수가 승리
// 음식 종류, 양, 순서 모두 같아야 함
// 칼로리가 낮은 음식을 먼저 먹게 배치
function solution(food) {
  // 0번째 음식은 물
  // 나머지 음식들 개수는 짝수여야 함

  let left = "";

  for (let i = 1; i < food.length; i++) {
    if (food[i] % 2 != 0) {
      food[i] -= 1;
      food[i] /= 2;
    } else {
      food[i] /= 2;
    }
  }
  for (let i = 1; i < food.length; i++) {
    left += String(i).repeat(food[i]);
  }

  // reverse는 배열 메스드임
  // left 문자열을 배열로 만든 후 뒤집고 다시 합쳐야 함
  let right = left.split("").reverse().join("");

  return left + "0" + right;
}
