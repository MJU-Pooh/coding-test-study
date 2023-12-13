# 10809

S = input()
arr = list(range(97, 123))

for i in arr:
    # find() : 문자열에서 특정 문자가 몇 번째에 위치했는지에 대한 값을 반환
    # 찾는 문자가 없을 경우 -1 반환
    # chr() : 아스키 코드 숫자 -> 문자로 변환하는 함수
    print(S.find(chr(i)), end=" ")