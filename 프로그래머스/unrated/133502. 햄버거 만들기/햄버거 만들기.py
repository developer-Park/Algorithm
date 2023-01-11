from collections import deque

# 빵 , 야채, 고기 빵
# 리스트에 차례대로 넣는다
# 숫자가 4개가 될때까지 append를한다.
# 1,2,3,1이 맞는지 확인한다 = 0번째에서 3번째까지 같은 숫자인지 확인한다
# 아니면 append를 한다.
# 이번엔 2번 째 자리에서 확인한다. = 1번째에서 4번까지 같은 숫자인지 확인
# 아니면 append를 한다.
# 3번째 자리에서 확인한다. = 2번째에서 5번까지 같은 숫자인지 확인
# ---

def solution(ingredient):
    de = deque(ingredient)
    appendlist = []
    hamburgercount=0
    for i in range(len(ingredient)):
        appendlist.append(de.popleft())
        if appendlist[-4:] == [1,2,3,1]:
            hamburgercount+=1
            for j in range(4):
                appendlist.pop()
    return hamburgercount