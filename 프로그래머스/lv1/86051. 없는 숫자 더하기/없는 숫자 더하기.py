def solution(numbers):
    answer = []
    number1 =[0,1,2,3,4,5,6,7,8,9]
    numbers = sorted(numbers)
    for i in number1:
        if i not in numbers:
            answer +=[i]
    result = sum(answer)
    return result

