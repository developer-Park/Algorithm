import operator
def solution(N, stages):
    w = []
    e = {}
    f = len(stages)
    for i in range(1, N + 1):
        a = 0

        for j in range(len(stages)):
            if stages[j] == i:
                a += 1
        if a == 0:
            e[i] =0
        else:
            e[i] = a/f
        f = f - a
    d1 = sorted(e.items(), key=operator.itemgetter(1), reverse=True)
    d1 = dict(d1)
    d1 = list(d1.keys())
    return d1
