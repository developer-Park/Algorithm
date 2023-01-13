def solution(seoul):
    kim = 0
    for i in range(len(seoul)):
        if seoul[i] == "Kim":
            kim += i

    return '김서방은 '+str(kim) +'에 있다'
