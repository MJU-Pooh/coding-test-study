function solution(clothes) {
  let answer = 1;
  const obj = {};
  clothes.map((c) => {
    // headgear라고 했을 때 obj내에 있을 경우
    if (obj[c[1]]) {
      return (obj[c[1]] += 1);
    } else {
      // 없는 카테고리면 새로 생성
      return (obj[c[1]] = 1);
    }
  });
  // 여기까지 하면 각 카테고리별로 의상의 종류가 몇 개인지 카운트됨
  // 의상의 종류의 수를 계산에 사용하므로 값만 추출
  const value = Object.values(obj);
  // 해당 의상을 안입는 경우를 생각해서 +1을 해서 모두 곱함
  for (let i = 0; i < value.length; i++) {
    answer *= value[i] + 1;
  }
  // 아무것도 안입는 경우를 제외해야 하므로 -1
  return answer - 1;
}
