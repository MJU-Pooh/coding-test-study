function solution(n, m) {
  var answer = [];

  let get_gcd = (n, m) => {
    let gcd = 1;
    for (let i = 2; i <= Math.min(n, m); i++) {
      if (n % i == 0 && m % i == 0) {
        gcd = i;
      }
    }
    answer.push(gcd);
  };

  let get_lcm = (n, m) => {
    let lcm = 1;

    while (true) {
      if (lcm % n == 0 && lcm % m == 0) {
        break;
      }
      lcm++;
    }
    answer.push(lcm);
  };

  get_gcd(n, m);
  get_lcm(n, m);
  return answer;
}
