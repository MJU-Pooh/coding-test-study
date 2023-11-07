function solution(s) {
  let str = s.toLowerCase().split("");
  let y_cnt = 0;
  let p_cnt = 0;

  // 둘 다 없으면 항상 true
  if (!str.includes("p") && !str.includes("y")) {
    return true;
  }

  for (let i = 0; i < str.length; i++) {
    if (str[i] == "p") {
      p_cnt++;
    } else if (str[i] == "y") {
      y_cnt++;
    }
  }

  return p_cnt == y_cnt ? true : false;
}
