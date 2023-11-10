// price: 이용료
// N번 탈때마다 이용료는 N배가 됨
// count번 타게 되면 현재 자신이 갖고 있는 금액에서 얼마가 모자른지 리턴
// 모자르지 않으면 0리턴

function solution(price, money, count) {
  let total = 0;

  for (let i = 1; i < count + 1; i++) {
    total += price * i;
  }

  if (total > money) {
    return total - money;
  } else {
    return 0;
  }
}
