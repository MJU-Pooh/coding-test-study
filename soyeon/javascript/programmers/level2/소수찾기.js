// 가능한 숫자 조합 생성
function combinations(arr) {
  const comb = [];

  function permute(current, remaining) {
    comb.push(current);

    if (remaining.length === 0) {
      return;
    }

    for (let i = 0; i < remaining.length; i++) {
      permute(
        current + remaining[i],
        remaining.slice(0, i).concat(remaining.slice(i + 1))
      );
    }
  }

  permute("", arr);
  return comb;
}

// 소수 체크
function isPrime(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function solution(numbers) {
  const num = numbers.split("");
  const comb = combinations(num);
  let answer = 0;

  // 문자열의 앞이 '0'이거나 빈 문자열 거르기
  const new_comb = comb.filter((num) => num[0] !== "0" && num !== "");

  // 중복 제거를 위해 set으로 변경
  new Set(new_comb).forEach((num) => {
    // 소수면 +1
    if (isPrime(Number(num))) {
      answer += 1;
    }
  });

  return answer;
}
