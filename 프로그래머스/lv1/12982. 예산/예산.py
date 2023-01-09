def solution(d, budget):
    count = 0
    d = sorted(d)
    result = 0
    for i in d:
        result += i

        if result <= budget:
            count +=1

    return count
