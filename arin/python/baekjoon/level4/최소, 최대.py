# 10818

# N개의 정수가 주어진다. 이때, 최솟값과 최댓값을 구하는 프로그램을 작성하시오.

N = int(input())
n_list = list(map(int, input().split()))

max = 0
min = 0

n_list.sort()

print(n_list[0], end=" ")
print(n_list[N-1])