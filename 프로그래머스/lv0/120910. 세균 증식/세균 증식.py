def solution(n, t):
    a=n
    for i in range(t):
        a+=a
    return a
