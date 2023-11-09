function solution(arr, divisor) {
  var answer = [];
  // js의 sort함수는 정렬 시 배열의 요소들을 문자열로 취급함
  // 숫자 정렬시 값을 비교해줄 수 있는 값을 넣어줘야 함
  // a-b로 크기를 비교한 후 a>b이면 양수, a<b이면 음수를 리턴해 오름차순으로 정렬
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % divisor == 0) {
      answer.push(arr[i]);
    }
  }

  if (answer.length == 0) {
    answer.push(-1);
  }

  return answer;
}
