#2525_오븐 시계
A, B = map(int, input().split())
C = int(input())

A_P = (B + C) // 60
B = (B + C) % 60
if A_P > 0:
    A = A + A_P
if A >= 24: #오후 -> 오전으로 넘어가는 경우 고려
    A = A - 24

print(A, B)
