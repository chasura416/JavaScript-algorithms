n, m = map(int, input().split())
cards = list((map(int, input().split())))

cards.sort()
for i in range(m):
    a = cards[0] + cards[1]
    cards[0] = cards[1] = a
    cards.sort()

print(sum(cards))
