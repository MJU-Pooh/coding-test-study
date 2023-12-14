# 2908
# 숫자를 뒤집어서 비교하는 문제

num = list(input().split(" "))
# slice로 문자열 순서 뒤집기
# [start:stop:step]
# [::-1]은 반대방향으로 리스트의 데이터를 자르는 것
num[0] = num[0][::-1]
num[1] = num[1][::-1]

answer = max(num)
print(answer)