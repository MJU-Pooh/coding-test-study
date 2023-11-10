// 배열에서 3개의 수를 뽑아 더했을 때 소수이면 +1

function solution(nums) {
  // 소수 판별 함수
  const isPrime = (num) => {
    // 시간초과 방지를 위해 제곱근까지만 반복문 시행
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i == 0) {
        return false;
      }
    }
    return true;
  };

  let answer = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        let number = nums[i] + nums[j] + nums[k];
        if (isPrime(number)) {
          answer += 1;
        }
      }
    }
  }
  return answer;
}
