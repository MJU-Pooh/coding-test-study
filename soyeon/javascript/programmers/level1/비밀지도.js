// 2018 kakao blind recuitment
// n*n 크기의 지도1 + 지도2 => 지도 완성
// 하나라도 1이면 거기는 벽. 공백은 0
// 원래의 지도를 해독해서 벽은 '#', 공백은 ''으로 리턴

function solution(n, arr1, arr2) {
  let answer = [];

  for (let i = 0; i < n; i++) {
    // toString으로 진수 변환을 하면 앞에 오는 0들은 생략
    // padStart는 그 공백들을 0으로 원하는 문자열의 길이로 맞춤
    // 길이가 n이기 때문에 2진수로 변환후 길이가 n이 되도록 앞을 0으로 채움
    let row1 = arr1[i].toString(2).padStart(n, "0");
    let row2 = arr2[i].toString(2).padStart(n, "0");

    // 지도의 가로 한 줄
    let line = [];

    for (let j = 0; j < n; j++) {
      if (row1[j] === "1" || row2[j] === "1") {
        line.push("#");
      } else {
        line.push(" ");
      }
    }
    answer.push(line.join(""));
  }
  return answer;
}
