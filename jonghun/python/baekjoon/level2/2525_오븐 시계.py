#오븐 시계 2525
#별의 별 시계가 다 있네
a,b = map(int, input().split())
c = int(input())
if ((b+c)>=60):
    a +=((b+c)//60)
    if(a>=24):
        a -=24
    b = (b+c)% 60
else:
    b +=c
print(a,b)
#코드 가독성 늘리는 법을 배워야겠다. 내가 푼 건데도 알아보기 힘들다