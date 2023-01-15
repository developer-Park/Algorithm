def solution(nums):
    poketmonCount = len(nums)//2
    removeduplication=len(list(set(nums)))
    answer = 0
    if poketmonCount <= removeduplication:
        answer += poketmonCount
        return answer
    else:
        answer += removeduplication

        return answer
