# 2675
# 각 문자를 반복하여 출력하는 문제

T = int(input())
for _ in range(T):
    R, S = input().split()
    for i in S:
        print(i * int(R), end="")
    print()

