def solution(n):
    li = list(map(int,str(n)))
    li1 = []
    for i in range(len(li),0,-1):
        li1.append(li[i-1])
    return li1