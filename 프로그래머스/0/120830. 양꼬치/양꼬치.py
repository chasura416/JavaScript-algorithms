def solution(n, k):
    answer = 0
    gogi = 12000 * n
    drink = 2000 * k
    service = int(n/10) * 2000
    
    return gogi + drink - service