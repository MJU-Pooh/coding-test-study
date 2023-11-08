function solution(n) {
  let answer = 0;
  let n_str = String(n).split("");
  for (let i = 0; i < n_str.length; i++) {
    answer += Number(n_str[i]);
  }
  return answer;
}
