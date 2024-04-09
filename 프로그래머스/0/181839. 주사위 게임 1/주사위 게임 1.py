def solution(a, b):
    answer = 0
    if a % 2 == 1 and b % 2 == 1:
        answer = a*a + b*b
        return answer
    elif a % 2 == 1 or b % 2 == 1:
        answer = 2 * (a + b) 
        return answer 
    else:
        answer = abs(a-b) 
        return answer
    return answer