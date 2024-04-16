// cards1과 cards2를 조합해서 goal을 만들 수 있으면 Yes, 아니면 No

function solution(cards1, cards2, goal) {
  let answer = "Yes";

  for (let i = 0; i < goal.length; i++) {
    if (cards1[0] === goal[i]) {
      cards1.shift();
    } else if (cards2[0] === goal[i]) {
      cards2.shift();
    } else {
      answer = "No";
      return answer;
    }
  }

  return answer;
}
