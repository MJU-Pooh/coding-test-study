# 10811

N, M = map(int, input().split(" "))
box = [i for i in range(1, N+1)]

temp = 0

for _ in range(M):
    i, j = map(int, input().split(" "))
    temp = box[i - 1 : j]
    temp.reverse()
    box[i - 1 : j] = temp


for i in range(N):
    print(box[i], end=" ")
