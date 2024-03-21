function solution(numbers) {
  // sort : 문자로 변환된 숫자를 연결해서 비교후 정렬
  // ex) '3', '30' => '303'-'330'
  const answer = numbers
    .map((num) => String(num))
    .sort((a, b) => b + a - (a + b))
    .join("");

  // 정답 문자열의 시작이 0인 경우에는 그냥 0을 리턴
  return answer[0] === "0" ? "0" : answer;
}
