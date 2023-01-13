def solution(array, commands):
    answer = []
    for i in range(len(commands)):
        commands1 = commands[i]
        array1 = array[commands1[0]-1:commands1[1]]
        array1.sort()
        answer+=[array1[commands1[2]-1]]
    return answer
