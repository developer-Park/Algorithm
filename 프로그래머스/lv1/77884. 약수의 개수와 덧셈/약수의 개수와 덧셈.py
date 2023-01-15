def solution(left, right):
    answer = 0
    c = []
    d = []

    for i in range(left, right + 1):
        c += [i]
        a = 0
        for j in range(1, i + 1):
            if i % j == 0:
                a += 1
        d.append(a)

    for k in range(len(d)):
        if d[k] % 2 == 0:
            answer += c[k]
        else:
            answer -= c[k]

    return answer

