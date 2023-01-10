def solution(hp):
    ant = 0
    while hp > 0:
        if hp // 5:
            hp -= 5
            ant +=1
        elif hp // 3:
            hp-= 3
            ant+=1
        else:
            hp -=1
            ant+=1
    return ant
