def solution(number):
    answer = 0
    d = len(number)
    for i in range(d - 2):
        for j in range(i + 1, d - 1):
            for k in range(j + 1, d):
                if number[i] + number[j] + number[k] == 0:
                    answer += 1
    return answer
