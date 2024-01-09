#곱셉 2588
a = int(input())
b = input()
#처음에는 b도 a와 같이 처리하려했으나 도저히 내 머리로는 생각이 안남. 그래서 그냥 b는 문자열처리하고 파이썬이 배열이되나? 되겠지하고 배열공부함
c3 = a*int(b[2]) #생각보다 파이썬 형변환이 잘되어있군
print(c3)
d4= a*int(b[1])
print(d4)
e5=a*int(b[0])
print(e5)
f6=100*e5+10*d4+c3
print(f6)