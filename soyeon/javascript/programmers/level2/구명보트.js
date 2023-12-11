function solution(people, limit) {
  var answer = 0;
  people.sort((a, b) => a - b);
  let left = 0;
  let right = people.length - 1;

  while (left <= right) {
    if (people[left] + people[right] <= limit) {
      left++;
      right--;
      answer++;
    } else {
      answer++;
      right--;
    }
  }
  return answer;
}

// 그리디 알고리즘
// 배에 탈 숭 있는 최대 무게가 있을때
// 사람들을 운반하기 위한 최소 개수의 구명보트 개수
