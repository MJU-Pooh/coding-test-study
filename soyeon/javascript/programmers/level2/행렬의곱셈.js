// arr1에 arr2를 곱한 결과를 반환하는 함수

function solution(arr1, arr2) {
  var answer = [];
  for (let i = 0; i < arr1.length; i++) {
    let result = [];
    for (let j = 0; j < arr2[0].length; j++) {
      let temp = 0;
      for (let k = 0; k < arr2.length; k++) {
        temp += arr1[i][k] * arr2[k][j];
      }
      result.push(temp);
    }
    answer.push(result);
  }
  return answer;
}
