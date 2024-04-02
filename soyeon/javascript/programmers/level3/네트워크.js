// 자신과 인접한 노드를 "모두" 찾는거임

function solution(n, computers) {
  const visited = Array.from({ length: n }, () => false);
  let answer = 0;

  // 노드 하나씩 탐색
  // dfs를 새로 시작하는건 앞의 탐색이 한 번 끝난거로 네트워크 하나 추가
  // 모든 노드가 방문상태가 되면 탐색 끝
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      DFS(i);
      answer++;
    }
  }

  function DFS(node) {
    // 0번 노드부터 시작한다고 할 때
    visited[node] = true;
    for (let i = 0; i < n; i++) {
      // 해당 노드에서 방문하지 않았고 연결된 상태라면
      // 그 노드로 이동해서 dfs수행
      if (computers[node][i] && !visited[i]) {
        DFS(i);
      }
    }
  }

  return answer;
}
