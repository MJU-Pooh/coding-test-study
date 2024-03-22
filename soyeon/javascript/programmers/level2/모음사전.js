function solution(word) {
  const moem = ["A", "E", "I", "O", "U"];
  const strs = [];

  function dfs(curr, idx) {
    if (idx > 5) {
      return;
    }
    // 처음 실행될 때 ''도 배열에 들어감
    strs.push(curr);

    for (let i = 0; i < moem.length; i++) {
      dfs(curr + moem[i], idx + 1);
    }
  }

  dfs("", 0);

  // 차피 몇번째인지를 리턴하는 거라
  // ''이 첫번째 요소로 들어가 있어도 ㄱㅊ
  return strs.indexOf(word);
}
