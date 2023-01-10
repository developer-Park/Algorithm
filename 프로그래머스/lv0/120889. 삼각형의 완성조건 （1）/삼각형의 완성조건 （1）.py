def solution(sides):
    sortedSides = sorted(sides)
    if sortedSides[0] + sortedSides[1] <= sortedSides[2]:
        return 2
    else:
        return 1
