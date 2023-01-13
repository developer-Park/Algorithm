def solution(arr, divisor):
    answer = []
    for i in range(len(arr)):
        if arr[i] % divisor ==0:
            answer+=[arr[i]]
    answer.sort()
    if len(answer) ==0:
        answer +=[-1]
    return answer
