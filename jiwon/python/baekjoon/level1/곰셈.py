#2588번
"""
A=int(input())
B=input()
print(A * int(B[2]))
print(A * int(B[1]))
print(A * int(B[0]))
print(A * int(B))
"""
A = int(input())
B = int(input())
print(A * (B % 10))
print(A * (B % 100 // 10))
print(A * (B // 100))
print(A * B)

#B를 문자열로 받아서 정수로 형변환을 하는 방법이 있음
#//는 몫을 구한다.