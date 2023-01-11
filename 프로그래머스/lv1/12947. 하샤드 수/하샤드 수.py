def solution(x):
    a = str(x)
    b = []
    c = 0
    for i in a:
        b.append(a[:1])
        a = a[1:]
    for i in b:
        c += int(i)
    if x % c == 0:
        return True
    else:
        return False
