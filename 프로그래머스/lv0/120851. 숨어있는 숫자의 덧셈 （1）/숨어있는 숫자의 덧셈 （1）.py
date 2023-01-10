import re
def solution(my_string):
    answer = 0
    a= re.findall(r'\d', my_string)
    for i in a:
        a= int(i)
        answer +=a
    return answer
