#10430번

A, B, C = map(int, input().split())
print((A+B)%C)
print(((A%C)+(B%C))%C)
print((A*B)%C)
print(((A%C)*(B%C))%C)
#split() 또 까먹고 쓰지 않았음, 문제도 한 번 틀림