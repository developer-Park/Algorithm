
def solution(num, total):

    answer =[]
    if num == 1:
        return [total]
    if num%2 == 1:
        middle = int(total/num)
        num -=1
        num = int(num/2)
        answer.append(middle)
        for i in range(1,num+1):
            answer.append(middle-i)
            answer.append(middle+i)
            answer = sorted(answer)
        return answer
    else:
        middle = int(total / num)
        num -= 1
        num = int(num / 2)
        print(num)
        answer.append(middle)
        for i in range(1, num + 1):
            answer.append(middle - i)
            answer.append(middle + i)
        answer.append(middle + i+1)
        print(answer)

        answer = sorted(answer)
    return answer
