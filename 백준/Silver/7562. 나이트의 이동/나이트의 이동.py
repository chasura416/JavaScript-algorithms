from collections import deque
T = int(input())

dx = [2, 2, 1, 1, -1, -1, -2, -2]
dy = [-1, 1, -2, 2, -2, 2, -1, 1]

def bfs():
    q = deque()
    q.append([now_x,now_y])
    board[now_x][now_y] = 1
    while q:
        x, y = q.popleft()
        for i in range(8):
            nx = x + dx[i]
            ny = y + dy[i]
            if 0 <= nx < size and 0 <= ny < size:
                if board[nx][ny] == 0:
                    board[nx][ny] = board[x][y] + 1
                    q.append([nx, ny])

for _ in range(T):
    size = int(input())

    board = [[0 for _ in range(size)] for _ in range(size)]
    now_x, now_y = map(int,input().split())
    move_x, move_y = map(int,input().split())
    bfs()

    print(board[move_x][move_y] - 1)