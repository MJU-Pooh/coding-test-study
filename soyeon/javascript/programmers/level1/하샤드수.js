function solution(x) {
  let x_lst = String(x).split("");
  let sum = 0;

  for (let i = 0; i < x_lst.length; i++) {
    sum += Number(x_lst[i]);
  }

  if (x % sum == 0) {
    return true;
  } else {
    return false;
  }
}
