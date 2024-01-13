num1 = input()
num2 = input()

num1_1=int(num1)//100
num1=int(num1)%100
num1_2=int(num1)//10
num1=int(num1)%10
num1_3=int(num1)//1

num2_1=int(num2)//100
num2=int(num2)%100
num2_2=int(num2)//10
num2=int(num2)%10
num2_3=int(num2)//1

num3_4=(num1_3*num2_3)%10
num3_plus=(num1_3*num2_3)//10
num3_3=(num1_2*num2_3+num3_plus)%10
num3_plus = (num1_2*num2_3+num3_plus)//10
num3_2=(num1_1*num2_3+num3_plus)%10
num3_1=(num1_1*num2_3+num3_plus)//10
num3=(num3_1*1000)+(num3_2*100)+(num3_3*10)+(num3_4)

num4_4=(num1_3*num2_2)%10
num4_plus=(num1_3*num2_2)//10
num4_3=(num1_2*num2_2+num4_plus)%10
num4_plus=(num1_2*num2_2+num4_plus)//10
num4_2=(num1_1*num2_2+num4_plus)%10
num4_1=(num1_1*num2_2+num4_plus)//10
num4=(num4_1*1000)+(num4_2*100)+(num4_3*10)+(num4_4)

num5_4=(num1_3*num2_1)%10
num5_plus=(num1_3*num2_1)//10
num5_3=(num1_2*num2_1+num5_plus)%10
num5_plus=(num1_2*num2_1+num5_plus)//10
num5_2=(num1_1*num2_1+num5_plus)%10
num5_1=(num1_1*num2_1+num5_plus)//10
num5=(num5_1*1000)+(num5_2*100)+(num5_3*10)+(num5_4)

num6_6=num3_4
num6_5=(num3_3+num4_4)%10
num6_plus=(num3_3+num4_4)//10
num6_4=(num3_2+num4_3+num5_4+num6_plus)%10
num6_plus=(num3_2+num4_3+num5_4+num6_plus)//10
num6_3=(num3_1+num4_2+num5_3+num6_plus)%10
num6_plus=(num3_1+num4_2+num5_3+num6_plus)//10
num6_2=(num4_1+num5_2+num6_plus)%10
num6_plus=(num4_1+num5_2+num6_plus)//10
num6_1=(num5_1+num6_plus)

num6=(num6_1*100000)+(num6_2*10000)+(num6_3*1000)+(num6_4*100)+(num6_5*10)+num6_6

print(num3)
print(num4)
print(num5)
print(num6)