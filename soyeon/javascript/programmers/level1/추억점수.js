function solution(name, yearning, photo) {
  var answer = [];

  // name과 yearning 매칭해서 객체로 만들기
  let dict = name.reduce((acc, curr, idx) => {
    acc[curr] = yearning[idx];
    return acc;
  }, new Object());

  //   name.forEach((person, index) => {
  //     info[person] = yearning[index];
  //   });

  for (let i = 0; i < photo.length; i++) {
    let sum = 0;
    for (let j = 0; j < photo[i].length; j++) {
      // 추억 점수가 없는 사람이 있기 때문에 조건 필요
      // 점수가 있다면 += sum
      if (dict[photo[i][j]]) sum += dict[photo[i][j]];
    }
    answer.push(sum);
  }

  return answer;
}
