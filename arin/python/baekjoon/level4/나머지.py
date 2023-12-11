# 3052

NumList = []

for _ in range(10):
    num = int(input())
    NumList.append(num % 42)


NumList = set(NumList)
print(len(NumList))


# NumList.sort()
# temp = 0
# count = 1
# for i in range(0, 9):
#     if NumList[i] != NumList[i+1]:
#         count += 1
#
# print(count)