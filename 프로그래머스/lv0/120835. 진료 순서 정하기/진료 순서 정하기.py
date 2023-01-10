def solution(emergency):
    answer = []
    sort=sorted(emergency, reverse=True)
    for i in emergency:
        answer.append(sort.index(i)+1)
    return answer
