import math


def solution(n):
    a = math.sqrt(n)
    if a - int(a) != 0:
        answer = -1
    else:
        answer = (a+1) *(a+1)
        answer = int(answer)
    return answer
