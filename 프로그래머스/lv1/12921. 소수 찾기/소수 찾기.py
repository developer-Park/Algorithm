import math


def solution(n):


    array = [True for i in range(n + 1)]
    answer = 0

    for i in range(2, int(math.sqrt(n)) + 1):
        if array[i]:
            j = 2
            while i * j <= n:
                array[i * j] = False
                j += 1

    for i in range(2, n + 1):
        if array[i]:
            answer += 1
    return answer

