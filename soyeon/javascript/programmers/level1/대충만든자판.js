// 입력하려는 문자열 targets를 작성하기 위해 최소 키를 몇 번씩 눌러야 하는지 순서대로 배열에 담아 리턴
// 작성할 수 없는 경우 -1

function solution(keymap, targets) {
  var answer = [];

  targets.forEach((target) => {
    let count = 0;
    for (let i = 0; i < target.length; i++) {
      // keymap의 각 요소 중 target[j]를 포함하는 문자의 minimum index 구함
      // keymap의 각 요소에서 idx를 구함
      // keymap에서 해당하는 문자열이 없다면 Infinity를 넣음
      // 그 안에서 최소값을 구함
      const min = Math.min(
        ...keymap.map((x) => {
          const idx = x.indexOf(target[i]);
          return idx === -1 ? Infinity : idx + 1;
        })
      );
      // min이 Infinity라는 것은 불가능을 의미하므로 count=-1
      if (min === Infinity) {
        count = -1;
        break;
      }
      count += min;
    }
    answer.push(count);
  });
  return answer;
}
