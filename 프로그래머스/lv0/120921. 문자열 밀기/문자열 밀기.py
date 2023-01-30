from collections import deque


def solution(A, B):
    a=deque(A)
    c=deque(B)
    for i in range(len(A)):
        if a == c:
            answer = i
            return answer
        else:
            b = a.pop()
            a.appendleft(b)
    else:
        return -1
