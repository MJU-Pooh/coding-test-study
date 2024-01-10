#주사위 세개 2480
#도박 장려 코딩
a,b,c = map(int, input().split())
if(a == b == c):
    print(10000+a*1000)
elif((a == b) or (a == c)):
    print(1000+ a*100)
elif(b==c):
    print(1000+b*100)
#처음에 elif((a == b) or (b == c)or (a == c)): 이걸쓰려 했으나 그럼 print할 때 이상해지므로 바꿈요
else:
    print(max(a,b,c)*100)
#와! 가장 큰 수 다 하나씩 if문 만들고 있었는데 max란게 있네 개사기잖아? wow~~
