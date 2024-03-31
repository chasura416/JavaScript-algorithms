def solution(num):
    answer = 0
    cnt = 0
    while True:
        if (cnt == 501):
            return -1
            break
        if num == 1:
            return cnt
            break
        if (num%2 == 0):
            num = num/2
            cnt += 1
        elif (num%2 == 1):
            num = (num*3)+1
            cnt += 1
       
      