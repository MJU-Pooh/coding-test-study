function solution(strings, n) {
  // localeCompare 문자열 비교 함수
  // 비교할 두 문자열의 n번째 글자가 같다면 단어 자체를 정렬
  // 그게 아니라면 n번째 글자를 기준으로 비교해서 정렬
  return strings.sort((s1, s2) =>
    s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n])
  );
}
