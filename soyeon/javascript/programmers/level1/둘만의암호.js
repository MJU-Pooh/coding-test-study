// 문자열 s의 각 알파벳을 index만큼 뒤의 알파벳으로 바꿔줍니다
// index만큼의 뒤의 알파벳이 z를 넘어갈 경우 다시 a로 돌아감
// skip에 있는 알파벳은 제외하고 건너뜀

function solution(s, skip, index) {
  var answer = "";
  const arr = s.split("");

  arr.forEach((str) => {
    let cnt = 0;
    // 해당 문자의 아스키코드를 반환
    let num = str.charCodeAt();
    while (true) {
      if (cnt === index) {
        // String.fromCharCode(num)
        // 아스키코드 num에 대응하는 문자를 반환
        answer += String.fromCharCode(num);
        break;
      }
      // 다음 문자가 z를 넘으면
      // 다시 a로 돌아감
      if (num + 1 === 123) {
        num = 96;
      }
      // 뛰어넘는 문자열이 아닐 경우
      if (!skip.includes(String.fromCharCode(num + 1))) {
        cnt++;
        num++;
      } else {
        // 뛰어넘는 경우면 다음 글자로 넘어가지만
        // 카운트는 증가하지 않음
        num++;
      }
    }
  });
  return answer;
}
