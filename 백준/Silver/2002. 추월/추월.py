from collections import deque

n = int(input())

entrance_car = deque()
# exit_car = deque()
count = 0

for i in range(n*2):
    if i < n:
        entrance_car.append(input())
    else:
        exit_car = input()
        if exit_car != entrance_car[0]:
            count += 1
            entrance_car.remove(exit_car)
        else:
            entrance_car.popleft()

print(count)