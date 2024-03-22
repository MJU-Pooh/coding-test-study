// 최대한 많은 던전을 탐험하려고 함
// 현재 피로도 k와 각 던전별 최소 필요 피로도, 소모 피로도가 담긴 2차원 배열이 입력으로 주어짐
// 이때 탐험할 수 있는 최대 던전 수를 리턴
// 완전탐색으로 푸는거 너무 비효율적

function solution(k, dungeons) {
  let answer = 0;
  // 방문 여부를 담을 배열
  const visited = Array.from({ length: dungeons.length }, () => false);

  function dfs(k, cnt) {
    for (let i = 0; i < dungeons.length; i++) {
      // 방문 조건
      if (visited[i] === false && dungeons[i][0] <= k) {
        // 방문하지 않았고 피로도가 최소 필요도 이상이라면
        // 방문처리 후, 카운트 증가 및 피로도 감소
        visited[i] = true;
        dfs(k - dungeons[i][1], cnt + 1);
        // 백트래킹을 위해서 다시 false 처리
        visited[i] = false;
      }
    }
    // 계속해서 answer 값을 최대값으로 업데이트
    answer = Math.max(answer, cnt);
  }
  dfs(k, 0);
  return answer;
}
