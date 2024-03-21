// i부터 j번째까지 자름
// 자른 배열을 정렬함
// 여기서 k번째 수를 구함

function solution(array, commands) {
  let answer = [];
  for (let i = 0; i < commands.length; i++) {
    let arr = array
      .slice(commands[i][0] - 1, commands[i][1])
      .sort((a, b) => a - b);
    answer.push(arr[commands[i][2] - 1]);
  }
  return answer;
}
