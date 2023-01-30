def solution(num, k):
    a = str(num)
    for i in range(len(a)):
        if a[i] == str(k):
            answer = i+1
            break
        else:
            answer = -1
    return answer
