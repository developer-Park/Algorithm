def solution(absolutes, signs):
    answer = []
    for i in range(len(absolutes)):
        if signs[i]:
            answer += [absolutes[i]]
        else:
            answer += [-absolutes[i]]
    a = sum(answer)
    return a