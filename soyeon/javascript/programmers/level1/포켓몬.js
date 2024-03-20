// N마리의 포켓몬을 가지고 있을 때, N/2개의 포켓몬을 가질 수 있다
// 최대한 다양한 종류의 포켓몬을 가져야 함
// 가장 많은 종류의 포켓몬을 선택하는 방법을 찾아, 그때의 포켓몬 종류 번호의 개수를 리턴

function solution(nums) {
  const poketmons = {};
  const select = nums.length / 2; // 뽑아야 할 포켓몬의 수

  // 포켓몬을 종류별로 분류한다
  // 이렇게 하면 {a: 1, b: 1, c: 2} 이런식으로 객체 완성
  nums.map((p) => {
    if (poketmons[p]) {
      return (poketmons[p] += 1);
    } else {
      return (poketmons[p] = 1);
    }
  });

  // 키를 추출하면 키의 수가 곧 포켓몬 종류의 수
  // 포켓몬 종류의 수보다 골라야 할 포켓몬의 수가 같거나 많다면
  // 결국 최대로 고를 수 있는 포켓몬 종류의 수는 가지고 있는 포켓몬 종류의 수가 됨
  if (Object.keys(poketmons).length <= select) {
    return Object.keys(poketmons).length;
  } else {
    // 그게 아니라면
    // 3종류의 포켓몬을 가지고 있는데 2마리만 고를 수 있다면
    // 결국 종류의 수는 골라야 할 포켓몬의 수와 같음
    return select;
  }
}
