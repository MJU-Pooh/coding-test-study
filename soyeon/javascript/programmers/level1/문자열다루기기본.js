function solution(s) {
  if ((s.length == 4 || s.length == 6) && s == parseInt(s)) {
    return true;
  } else {
    return false;
  }
}

/*
parseInt 함수
함수 안에 문자열을 넣어주면 해당 문자열을 정수로 바꿔줌
숫자로 이루어진 문자열이 아닐 경우 NaN을 반환함
자료형까지 비교하지 않아도 되므로 == 사용
*/
