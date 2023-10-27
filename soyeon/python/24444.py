# silver2 알고리즘 수업-너비 우선 탐색 1
# 1번부터 N번까지의 정점과 M개의 간선을 가진 무방향 그래프
# 너비 우선 탐색으로 노드를 방문할 경우 노드의 방문 순서를 출력
# 인접한 정점은 오름차순으로 방문 (작은 번호부터)
# 입력: 정점의 수 N, 간선의 수 M, 시작 정점 R
# M개의 줄에 간선 정보 u, v가 주어지며 정점 u와 정점 v의 가중치 1인 양방향 간선을 나타냄
# 출력: 첫째 줄부터 N개의 줄에 거쳐 i번째 줄에는 정점 i의 방문 순서 출력. 시작 정점의 방문 순서는 1.
# 시작 정점에서 방문할 수 없는 경우 0을 출력 
import sys
from collections import deque

N, M, R = map(int, sys.stdin.readline().split())
info = [[] for _ in range(N+1)]  # 연결된 노드의 정보를 담고 있음
visited = [0] * (N+1)

for _ in range(M):
    u, v = map(int, sys.stdin.readline().split())

    info[u].append(v) # 정점 u와 연결된 노드가 v라는 뜻
    info[v].append(u) # 정점 v와 연결된 노드가 u라는 뜻

for i in range(N+1):
    # 오름차순으로 방문을 위해서 정렬
    info[i].sort()

def bfs(info, R, visited):
    # R번 노드에서 시작
    q = deque([R])

    # 방문 순서 출력을 위해 카운트 변수 사용
    visited[R] = 1
    cnt = 2

    while q:
        v = q.popleft()  # 방문한 노드는 pop
        for i in info[v]:
            if not visited[i]:
                q.append(i)
                visited[i] += cnt
                cnt += 1
            
bfs(info, R, visited)

for i in visited[1::]:
    print(i)
