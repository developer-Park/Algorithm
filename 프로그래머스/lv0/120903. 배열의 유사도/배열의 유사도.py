def solution(s1, s2):
    count = 0
    for i in s1:
        if s2.count(i):
           count +=1


    return count