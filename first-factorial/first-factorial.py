def firstFactorial(num):
    if num - 1 == 0:
        return num

    return num * firstFactorial(num-1)

print(firstFactorial(4)) # 24