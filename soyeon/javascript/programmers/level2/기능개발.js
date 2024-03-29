function solution(progresses, speeds) {
  let answer = [];

  for (let i = 0; i < progresses.length; i++) {
    // 남은 일자 계산
    progresses[i] = Math.ceil((100 - progresses[i]) / speeds[i]);
    if (i !== 0 && progresses[i - 1] > progresses[i]) {
      // 뒤에 있는 기능이 더 빨리 배포된다면
      // 앞에 기능과 같이 배포되도록 날짜를 동일하게 맞춰줌
      progresses[i] = progresses[i - 1];
    }
  }

  let max_day = progresses[0];
  let cnt = 1;

  for (let i = 1; i < progresses.length; i++) {
    if (progresses[i] <= max_day) {
      cnt++;
    } else {
      // 날짜 업데이트 후 배포 및 카운트 초기화
      max_day = progresses[i];
      answer.push(cnt);
      cnt = 1;
    }
  }
  // 마지막 카운트 추가
  answer.push(cnt);

  return answer;
}
