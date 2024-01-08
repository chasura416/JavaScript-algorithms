def solution(numbers):
    num_len = len(numbers)
    for i in range(0, num_len):
        numbers[i] = numbers[i]*2 
    return numbers