function solution(s) {
  // Math함수 문자열도 취급해서 숫자로 비교할 수 있음
  // const arr = s.split(' ');
  // return Math.min(...arr)+' '+Math.max(...arr);
  var answer = "";
  arr = s.split(" ");

  for (let i = 0; i < arr.length; i++) {
    arr[i] = Number(arr[i]);
  }

  let minElement = arr.reduce((a, b) => {
    return Math.min(a, b);
  });

  let maxElement = arr.reduce((a, b) => {
    return Math.max(a, b);
  });

  answer += String(minElement);
  answer += " ";
  answer += String(maxElement);

  return answer;
}
