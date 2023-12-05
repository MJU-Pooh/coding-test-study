function solution(s) {
  const s_arr = s.split("");
  let stack = [];

  // 처음에 한 번 걸러주는 작업을 하니 시간초과 해결!
  if (s_arr[0] == ")") {
    return false;
  }

  for (let i = 0; i < s_arr.length; i++) {
    if (s_arr[i] == "(") {
      stack.push(s_arr[i]);
    } else {
      if (stack.length == 0) {
        return false;
      } else {
        stack.pop();
      }
    }
  }

  if (stack.length == 0) {
    return true;
  } else {
    return false;
  }
}
