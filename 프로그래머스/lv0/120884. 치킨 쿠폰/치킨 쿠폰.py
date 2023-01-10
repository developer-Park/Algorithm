def solution(chicken):
    coupon= chicken
    serviceChicken = 0
    while coupon >=10:
        coupon -= 10
        serviceChicken +=1
        coupon += 1
    return serviceChicken
