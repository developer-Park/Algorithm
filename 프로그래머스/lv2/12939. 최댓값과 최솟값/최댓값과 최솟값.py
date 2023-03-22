def solution(s):
    answer = ''
    ar=[]
    for _ in s:
        s1= s.split(" ")
    for i in s1:
         ar.append(int(i))
    maxnum = str(max(ar))
    minnum = str(min(ar))
    answer += minnum + " " + maxnum
    return answer
