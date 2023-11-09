function solution(s) {
  const word = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  var answer = s;

  for (let i = 0; i < 10; i++) {
    let arr = answer.split(word[i]);
    answer = arr.join(i);
  }

  return Number(answer);
}
