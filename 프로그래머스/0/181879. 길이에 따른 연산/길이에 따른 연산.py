def solution(num_list):
    if len(num_list) >= 11:
        return sum(num_list)
    else:
        ans = 1
        for n in num_list:
            ans *= n
        return ans