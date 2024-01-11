n = int(input())
s,e = list(map(int, input().split()))
m = int(input())

graph = [[] for _ in range(n + 1)]

for i in range(m):
    a, b = map(int, input().split())
    graph[a].append(b)
    graph[b].append(a)

def bfs(s, e):
    q = []
    visited = [0] * (n+1)

    q.append(s)
    visited[s] = 1

    while q:
        c = q.pop(0)
        if c == e:
            return visited[e]-1

        for i in graph[c]:
            if not visited[i]:
                q.append(i)
                visited[i] += visited[c]+1

    return -1


answer = bfs(s, e)
print(answer)
