function solution(citations) {
  // 내림차순
  citations.sort((a, b) => b - a);

  // i는 인용수를 의미
  // 인용수가 논문의 수와 같아졌다면 인용수를 리턴
  for (let i = 0; i < citations.length; i++) {
    if (citations[i] === i + 1) {
      return i + 1;
    } else if (citations[i] < i + 1) {
      // 인용수가 논문 수보다 작아졌다면 그때는 논문 수를 리턴
      return i;
    }
  }
  return citations.length;
}
