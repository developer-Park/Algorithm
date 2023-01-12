
def solution(n, lost, reserve):
    answer = 0
    countwear = 1
    student = {}
    for i in range(1, n + 1):
        student[i] = countwear
    for i in range(len(reserve)):
        student[reserve[i]] += 1
    for i in range(len(lost)):
        student[lost[i]] -= 1
    for i in range(1, len(student) + 1):
        for j in range(i + 1, len(student) + 1):
            if student[len(student)] == 2 and student[len(student) - 1] == 0:
                student[len(student)] -= 1
                student[len(student) - 1] += 1
            if student[1] == 0 and student[2] == 2:
                student[1] += 1
                student[2] -= 1
            if student[i] == 2 and student[j] == 0 and j - i == 1:
                student[i] -= 1
                student[j] += 1
            if student[j] == 2 and student[i] == 0 and j - i ==1:
                student[j] -= 1
                student[i] += 1
        if student[i] >= 1:
            answer += 1
    return answer
