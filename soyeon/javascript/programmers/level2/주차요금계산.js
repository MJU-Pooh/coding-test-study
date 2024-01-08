// 2022 kakao blind recruitment
// 출차 내역이 없으면 23:59출차로 간주
// 기본 시간 180분, 기본요금 5000원, 10분당 600원
// 주차 시간이 기본 시간 이하면 기본 요금 청구
// 초과 시간이 단위 시간 10으로 나누어 떨어지지 않으면 올림 (15분 초과면 20분으로 간주해 1200원 청구)
// fees는 길이4의 배열로 순서대로 기본 시간/기본 요금/단위 시간/단위 요금
// records의 각 원소는 "시각 차량번호 내역"형식의 문자열
// 차량 번호가 작은 자동차부터 청구할 주차 요금을 차레대로 정수 배열에 담아 return
// 풀이 방법이 많아서 다른 사람 풀이 참고해도 좋을 듯

function solution(fees, records) {
  var answer = [];
  let memory = {};
  let parking = {};

  // records를 배열로 수정해서 차량 번호로 정렬
  records.forEach((v) => {
    const [time, car, type] = v.split(" ");

    if (type === "IN") {
      parking[car] = time;
    } else {
      // type이 OUT일 때 시간 계산
      let spent =
        Number(time.split(":")[0] * 60) +
        Number(time.split(":")[1]) -
        (Number(parking[car].split(":")[0] * 60) +
          Number(parking[car].split(":")[1]));
      if (car in memory) {
        // 주차한 적이 있는 경우 시간 ++
        memory[car] += spent;
      } else {
        memory[car] = spent;
      }
      delete parking[car];
    }
  });

  // parking의 길이가 1이상이라면 출차를 안하고 차가 남아있는 것으로 출차 시간이 23:59로 계산
  if (Object.keys(parking).length > 0) {
    for (let c of Object.keys(parking)) {
      let spent =
        23 * 60 +
        59 -
        (Number(parking[c].split(":")[0] * 60) +
          Number(parking[c].split(":")[1]));
      // 이미 주차했던 기록이 있으면 시간만++
      if (c in memory) {
        memory[c] += spent;
      } else {
        memory[c] = spent;
      }
    }
  }

  // 차량 번호가 key역할을 하고 있으므로 이를 기준으로 정렬
  let keys = Object.keys(memory).sort();

  for (let k of keys) {
    // 시간이 기본 시간 이하라면 기본 요금만
    if (memory[k] <= fees[0]) {
      answer.push(fees[1]);
    } else {
      // 그게 아니라면 기본요금 + 추가 요금(분 단위는 올림으로 계산)
      answer.push(
        fees[1] + Math.ceil((memory[k] - fees[0]) / fees[2]) * fees[3]
      );
    }
  }

  return answer;
}
