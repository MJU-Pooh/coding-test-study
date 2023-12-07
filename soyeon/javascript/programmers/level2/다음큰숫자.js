function solution(n) {
  n_bin = n.toString(2); // 2진수로
  cnt1 = n_bin.match(/1/g)?.length; //march(/찾을문자/g).length 찾을 문자들의 개수 리턴
  let next = n;

  while (true) {
    next++;
    cnt2 = next.toString(2).match(/1/g)?.length;
    if (cnt2 == cnt1) {
      return next;
    }
  }
}
