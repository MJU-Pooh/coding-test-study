# 2480_주사위 세개
# 김아린씨의 레전드 주사위가 생각나네요...이야~~~우와~~~

num1, num2, num3 = map(int, input().split())

if num1 == num2 and num2 == num3 and num3 == num1:  # 같은 눈이 3개 나올 경우
    same = num1
    price = int(10000 + same * 1000)

elif num1 == num2 or num1 == num3:  # 같은 눈이 2개 나올 경우
    same = num1
    price = int(1000 + same * 100)
elif num2 == num3:
    same = num2
    price = int(1000 + same * 100)

elif num1 != num2 and num2 != num3 and num3 != num1:  # 모두 다른 눈이 나오는 경우
    if num1 > num2 and num1 > num3:
        mostbig = num1
    elif num2 > num1 and num2 > num3:
        mostbig = num2
    elif num3 > num2 and num3 > num1:
        mostbig = num3
    price = int(mostbig * 100)

print(price)
