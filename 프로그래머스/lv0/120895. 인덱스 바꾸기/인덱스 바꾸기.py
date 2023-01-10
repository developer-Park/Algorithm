def solution(my_string, num1, num2):
    my_string1 = list(my_string)
    a=my_string1[num1]
    b=my_string1[num2]
    c=my_string.index(a)
    d=my_string.index(b)
    my_string1[c], my_string1[d] = my_string1[d], my_string1[c]
    answer = ''.join(s for s in my_string1)
    return answer
