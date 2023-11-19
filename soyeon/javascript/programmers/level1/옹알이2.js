// 단어를 조합해서 발음할 수 있는 말의 수 리턴
// 같은 발음이 연속되면 안됨

function solution(babbling) {
  const talk = ["aya", "ye", "woo", "ma"];
  let count = 0;

  for (let i = 0; i < babbling.length; i++) {
    for (let j = 0; j < talk.length; j++) {
      // 두 번 반복되는 순간 break -> 다음 단어로 이동
      if (babbling[i].includes(talk[j].repeat(2))) {
        break;
      }
      // talk[j]를 가지고 있는 경우 그걸 기준으로 문자열을 자름
      babbling[i] = babbling[i].split(talk[j]).join(" ");
    }
    // 자르고 남은 문자열의 길이가 0이면 옹알이로 조합이 가능한 경우로 count++
    if (babbling[i].split(" ").join("").length === 0) {
      count += 1;
    }
  }

  return count;
}
