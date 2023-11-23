# 최단 경로를 찾고자 할 때 사용
# 큐를 사용해 구현
# O(n)

from collections import deque

# 그래프, 각 노드가 어떤 노드랑 연결되어 있는지
graph = [
    [],  # 0
    [2, 3],  # 1
    [4, 5],  # 2
    [6],  # 3
    [2, 5],  # 4
    [2, 4],  # 5
    [3, 7],  # 6
    [6],  # 7
]

visited = [False] * 8


def bfs(v):
    # 큐 생성 및 큐에 시작 노드 삽입
    q = deque()
    q.append(v)

    # 방문해야 하는 노드가 있다면 계속
    while q:
        # 큐에서 노드를 꺼내 x라는 변수에 저장
        # 1번 노드부터 시작했으므로 1출력
        x = q.popleft()
        print(x, end=" ")

        # 그래프를 탐색하다가 방문하지 않은 노드가 있다면
        # graph[1]에는 2, 3이 있음
        for i in graph[x]:
            if not visited[i]:
                # 2와 3은 아직 방문하지 않음
                # 큐에 방문하라고 삽입하고 방문 처리
                q.append(i)
                visited[i] = True


# 1번 노드부터
bfs(1)
