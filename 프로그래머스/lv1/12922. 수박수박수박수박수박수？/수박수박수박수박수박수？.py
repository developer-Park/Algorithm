def solution(n):
    answer = ""
    su="수" 
    subak="수박"
    baksu ="박수"
#수/박수/박수/박수
    if n % 2 !=0:
        answer +=su
        answer +=baksu * (n//2)
    else:
        answer +=subak * (n//2)
    return answer