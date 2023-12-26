// 할인하는 상품 목록 discount, 사려는 물건 목록 want, 원하는 제품의 수량 number
// 몇째날에 회원 등록을 해야 원하는 제품을 모두 할인 받아 살 수 있는지
// 가능한 총 일수를 구해서 리턴

function solution(want, number, discount) {
  var answer = 0;

  // 필요한 물품 목록
  for (let i = 0; i < want.length; i++) {
    for (let j = 0; j < number[i] - 1; j++) {
      want.push(want[i]);
    }
  }
  want.sort();
  const num = want.length;

  for (let i = 0; i < discount.length - num + 1; i++) {
    // 시작점을 옮기면서 want 수량에 맞도록 부분 배열을 생성함
    let part = discount.slice(i, i + num);
    part.sort();
    // want와 part모두 정렬 후 배열을 문자열로 바꿔 두 문자열이 동등한지 비교
    // 동일하면 모든 물건을 구매할 수 있는 것으로 +1
    if (want.toString() === part.toString()) {
      answer++;
    }
  }

  return answer;
}

// 배열과 객체는 등가 연산자를 써도 비교할 수 없음
// 순서를 맞추더라도 js에서 배열과 객체는 값을 비교하는 게 아니라
// 객체의 주소를 비교하기 때문에 메서드를 사용해야 함
// if(part === want){
//     answer++;
// }
