def solution(x,y):
    dayCnt = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    dayStr = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU']
    totalDay = 0
    for i in range(x - 1):
        totalDay += dayCnt[i]
    totalDay += y - 1
    totalDay = totalDay % 7
    answer = dayStr[totalDay]
    return answer