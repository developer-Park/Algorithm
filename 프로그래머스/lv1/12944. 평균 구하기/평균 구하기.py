def solution(arr):
    answer = 0
    for i in arr:
        answer += i
        print(answer)
    answer = answer / len(arr)
    return answer
