def list_chunk(lst, n):
    return [lst[i:i+n] for i in range(0, len(lst), n)]



def solution(k, m, score):
    answer = 0
    score = sorted(score, reverse=True)
    score = list_chunk(score,m)
    for i in range(len(score)):
        if len(score[i]) < m:
            pass
        else:
            minNumber = min(score[i])
            answer += minNumber * m
    return answer
