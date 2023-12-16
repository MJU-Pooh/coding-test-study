# 11718

# 입력을 계속 반복
while True:
    # try, except 문으로 예외처리
    try:
        print(input())
    # EOFError (문자의 끝) 에러를 통해 입력을 마치면 반복문을 종료
    except EOFError:
        break