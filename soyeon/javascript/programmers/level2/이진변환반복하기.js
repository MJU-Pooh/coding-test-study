function solution(s) {
  let answer = [0, 0];

  while (s !== "1") {
    answer[0]++;
    let prev = s.length;
    let curr = s.replaceAll("0", "").length; // 문자열의 0 없애기
    answer[1] += prev - curr;
    s = curr.toString(2); // 2진수로 변환
  }

  return answer;
}
