function solution(n) {
  let num_lst = String(n).split("");
  // 배열 문자 요소들을 숫자로
  num_lst = num_lst.map(Number);
  num_lst.reverse();
  return num_lst;
}
