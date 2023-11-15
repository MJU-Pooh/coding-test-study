function solution(s, n) {
  var answer = "";
  let s_lst = s.split("");
  for (let i = 0; i < s_lst.length; i++) {
    // 한 문자씩 아스키 코드 값으로 변환
    let new_code = s_lst[i].charCodeAt();
    // 아스키코드 대문자 범위
    if (new_code >= 65 && new_code <= 90) {
      new_code += n;
      // 91부터 96까지는 문자임
      // Z -> A가 되도록
      if (new_code > 90) {
        new_code -= 26;
      }
    }
    // 소문자 범위
    else if (new_code >= 97 && new_code <= 122) {
      new_code += n;
      // 122는 z, z -> a가 되도록
      if (new_code > 122) {
        new_code -= 26;
      }
    }
    // 새로운 아스키 코드를 문자로 변환해서 문자열 합치기
    str = String.fromCharCode(new_code);
    answer += str;
  }
  return answer;
}
