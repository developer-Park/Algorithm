def solution(answers):
    a = [1, 2, 3, 4, 5] * len(answers)
    b = [2, 1, 2, 3, 2, 4, 2, 5] * len(answers)
    c = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5] * len(answers)
    answer = [0] * 3
    result1 = []
    for i in range(len(answers)):
        if answers[i] == a[i]:
            answer[0] += 1
        if answers[i] == b[i]:
            answer[1] += 1
        if answers[i] == c[i]:
            answer[2] += 1
    e = max(answer)
    for i in range(len(answer)):
        if answer[i] == e:
            result1 += [i+1]
        elif answer[i] > e:
            result1.append(i)
    return result1

