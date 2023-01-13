
def solution(nums):
    answer = 0
    a= []
    for i in range(len(nums)):
        for j in range(i+1,len(nums)-1):
            for w in range(j+1, len(nums)):
                a += [nums[i]+nums[j]+nums[w]]

    for i in a:
        b=0
        for j in range(2,i):
            if i%j == 0:
                b = 1
        if b == 0:
            answer+=1

    return answer
