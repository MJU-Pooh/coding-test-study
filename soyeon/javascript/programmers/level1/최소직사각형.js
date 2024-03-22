// [가로, 세로]의 형태로 명함의 사이즈가 sizes 배열로 추어질때
// 명함을 적절히 회전시켜 모든 명함을 수납할 수 있는
// 최소 사이즈의 명함 사이즈를 구하기

function solution(sizes) {
  var width = 0;
  var height = 0;

  sizes.forEach((size) => {
    if (size[0] > size[1]) {
      let temp = size[0];
      size[0] = size[1];
      size[1] = temp;
    }
  });

  for (let i = 0; i < sizes.length; i++) {
    if (sizes[i][0] > width) {
      width = sizes[i][0];
    }
    if (sizes[i][1] > height) {
      height = sizes[i][1];
      console.log(height);
    }
  }
  return width * height;
}
