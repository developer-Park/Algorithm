def solution(a, b, n):
    emptybottle = 0
    while n >= a:
        print(n)
        if n >= a:
            leftbottle = n - ((n // a) * a) + ((n // a) *b)
            emptybottle += (n // a) * b
            n = leftbottle
    return emptybottle