# 1330_두 수 비교하기
A, B = map(int, input().split())
# map 함수 -> 여러개가 입력된 경우 각각의 요소들에 대해 특정한 함수를 적용시키고 싶을때 사용한다
if A > B:
    print('>')
elif A < B:
    print('<')
elif A == B:
    print('==')
