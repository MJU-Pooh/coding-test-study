// 정답 배열이 주어질 때
// 가장 많은 정답을 맞춘 사람은 누구인지 배열에 담아 리턴

function solution(answers) {
  var answer = [];
  const student = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];
  let cnt_arr = [];

  student.forEach((stu) => {
    let cnt = 0;
    for (let i = 0; i < answers.length; i++) {
      // 정답을 찍는 패턴의 길이와 정답의 길이가 다를 경우를 위해서 나머지 값을 사용해야 함
      if (stu[i % stu.length] === answers[i]) {
        cnt += 1;
      }
    }
    cnt_arr.push(cnt);
  });

  // 배열을 직접 받지 않으므로 전개 연산자를 붙여줘야 함
  let max_cnt = Math.max(...cnt_arr);

  for (let i = 0; i < cnt_arr.length; i++) {
    if (cnt_arr[i] === max_cnt) {
      answer.push(i + 1);
    }
  }
  answer.sort((a, b) => a - b);
  return answer;
}
