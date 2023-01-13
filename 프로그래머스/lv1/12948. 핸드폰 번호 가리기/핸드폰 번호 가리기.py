def solution(phone_number):
    lens= len(phone_number)
    b=''
    lens = lens - 4
    for i in range(lens):
        b += '*'
    b+=phone_number[lens::]
    return b