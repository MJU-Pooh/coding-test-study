// 참가자와 완주자 명단을 담은 배열이 각각 입력으로 주어짐
// 두 배열의 길이의 차는 1 => 완주하지 못한 자는 항상 1명
// 동명이인이 존재할 수 있음
// 완주하지 못한 선수의 이름 리턴

function solution(participant, completion) {
  const part = {};
  let answer = "";

  participant.map((p) => {
    if (part[p]) {
      part[p] += 1;
    } else {
      part[p] = 1;
    }
  });

  for (let i = 0; i < completion.length; i++) {
    if (part[completion[i]] > 0) {
      part[completion[i]] -= 1;
    }
  }

  Object.entries(part).forEach((p) => {
    if (p[1] > 0) {
      answer = p[0];
    }
  });

  return answer;
}

// 입력으로 받는 두 배열을 각각 정렬해서 다른 걸 찾는 방법도 있음
// 다만 해시(객체) 만드는 풀이로 풀기 위해 위처럼 풀었음
