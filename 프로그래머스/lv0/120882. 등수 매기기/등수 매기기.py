def solution(score):
    answer = []
    average = []
    for i in range(len(score)):
       beforeaverage = (score[i][0] + score[i][1]) /2
       average.extend([beforeaverage])
    sort = sorted(average,reverse=True)
    for i in average:
        answer.append(sort.index(i)+1)
    return answer
