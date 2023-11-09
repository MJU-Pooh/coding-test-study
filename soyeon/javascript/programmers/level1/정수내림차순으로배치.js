function solution(n) {
  let n_lst = String(n).split("");
  n_lst.sort((a, b) => b - a);

  let answer = "";
  for (let i = 0; i < n_lst.length; i++) {
    answer += n_lst[i];
  }

  return Number(answer);
}
