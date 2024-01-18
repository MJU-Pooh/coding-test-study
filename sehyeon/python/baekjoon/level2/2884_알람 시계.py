# 2884_알람 시계
H, M = map(int, input().split())

M = M - 45 #입력된 분값에서 45분 빼기

if H != 0 and M < 0: #Hour이 00시가 아니면서 Minute이 음수가 되는 경우
    H = H - 1
    M = M + 60
elif H == 0 and M < 0: #Hour이 00시면서 Minute이 음수가 되는 경우
    H = 23
    M = 60 + M

print(H, M)
