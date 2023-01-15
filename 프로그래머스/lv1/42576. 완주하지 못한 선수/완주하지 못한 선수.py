import collections

def solution(participant, completion):
    answer = ''
    a=collections.Counter(participant)
    b=collections.Counter(completion)
    c=a-b
    c= list(c)
    answer = ''.join(c)
    return answer