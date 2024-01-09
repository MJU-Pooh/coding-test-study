#나머지 10430
a,b,c=input().split()
A = int(a)
B = int(b)
C = int(c)
print((A+B)%C)
print(((A%C)+(B%C))%C)
print((A*B)%C)
print(((A%C)*(B%C))%C)

#split을 사용할 때 a,b,c= int(input().split())으로 처리하려했는데 안되는거보니 안되나보다