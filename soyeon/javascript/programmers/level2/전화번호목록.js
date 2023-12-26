function solution(phone_book) {
  phone_book.sort();
  for (let i = 0; i < phone_book.length - 1; i++) {
    // startsWith(): 주어진 문자열이 괄호 안에 들어가는 문자열로 시작하는지를 검사
    // 불린값을 반환, 시작하면 true 아니면 false
    if (phone_book[i + 1].startsWith(phone_book[i])) {
      return false;
    }
  }
  return true;
}
