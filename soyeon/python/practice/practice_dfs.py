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


def dfs(v):
    # 처음에는 1번부터 시작
    # 1이 출력되고 1번 노드 방문처리
    visited[v] = True
    print(v, end=" ")

    # 그래프를 순회하며 인접 노드들 방문
    # graph[1]에 있는 2, 3은 방문하지 않음
    for i in graph[v]:
        # 방문하지 않은 노드가 있다면
        if not visited[i]:
            # 거기서부터 dfs
            # 2번 에서 다시 dfs시작
            # 2가 출력되고 graph[2]에 있는 4, 5 중 4에서 다시 dfs
            dfs(i)


dfs(1)
