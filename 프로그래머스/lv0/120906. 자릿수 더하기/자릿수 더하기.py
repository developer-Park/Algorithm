def stringNumberSum(inputList):
    for i in range(0,len(inputList)):
        inputList[i] = int(inputList[i])
    return sum(inputList)

def solution(n):
    n = str(n)
    n = list(n)
    n = stringNumberSum(n)
    return n
