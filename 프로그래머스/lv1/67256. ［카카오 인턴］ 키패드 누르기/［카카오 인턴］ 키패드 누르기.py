def solution(numbers, hand):
    result = ""
    leftHand = 10
    rightHand = 12
    for i in range(len(numbers)):


        if numbers[i] == 1:
            leftHand = 1
            result += "L"
        elif numbers[i] == 4:
            leftHand = 4
            result += "L"
        elif numbers[i] == 7:
            leftHand = 7
            result += "L"
        elif numbers[i] == 3:
            rightHand = 3
            result += "R"
        elif numbers[i] == 6:
            rightHand = 6
            result += "R"
        elif numbers[i] == 9:
            rightHand = 9
            result += "R"
        elif numbers[i] == 2:
            leftHandNumber = numbers[i] - leftHand
            rightHandNumber = numbers[i] - rightHand
            if leftHandNumber < 0:
                leftHandNumber = leftHandNumber * -1
            if rightHandNumber < 0:
                rightHandNumber = rightHandNumber * -1

            leftdistance = (leftHandNumber % 3) + (leftHandNumber // 3)
            rightdistance = (rightHandNumber % 3) + (rightHandNumber // 3)
            if leftdistance > rightdistance:
                rightHand = numbers[i]
                result += "R"
            elif leftdistance < rightdistance:
                leftHand = numbers[i]
                result += "L"
            elif leftdistance == rightdistance:
                if hand == "right":
                    rightHand = numbers[i]
                    result += "R"
                else:
                    leftHand = numbers[i]
                    result += "L"
        elif numbers[i] == 5:
            leftHandNumber = numbers[i] - leftHand
            rightHandNumber = numbers[i] - rightHand
            if leftHandNumber < 0:
                leftHandNumber = leftHandNumber * -1
            if rightHandNumber < 0:
                rightHandNumber = rightHandNumber * -1

            leftdistance = (leftHandNumber % 3) + (leftHandNumber // 3)
            rightdistance = (rightHandNumber % 3) + (rightHandNumber // 3)
            if leftdistance > rightdistance:
                rightHand = numbers[i]
                result += "R"
            elif leftdistance < rightdistance:
                leftHand = numbers[i]
                result += "L"
            elif leftdistance == rightdistance:
                if hand == "right":
                    rightHand = numbers[i]
                    result += "R"
                else:
                    leftHand = numbers[i]
                    result += "L"
        elif numbers[i] == 8:
            leftHandNumber = numbers[i] - leftHand
            rightHandNumber = numbers[i] - rightHand
            if leftHandNumber < 0:
                leftHandNumber = leftHandNumber * -1
            if rightHandNumber < 0:
                rightHandNumber = rightHandNumber * -1

            leftdistance = (leftHandNumber % 3) + (leftHandNumber // 3)
            print(leftdistance)
            rightdistance = (rightHandNumber % 3) + (rightHandNumber // 3)
            print(rightdistance)

            if leftdistance > rightdistance:
                rightHand = numbers[i]
                result += "R"
            elif leftdistance < rightdistance:
                leftHand = numbers[i]
                result += "L"
            elif leftdistance == rightdistance:
                if hand == "right":
                    rightHand = numbers[i]
                    result += "R"
                else:
                    leftHand = numbers[i]
                    result += "L"
        elif numbers[i] == 0:
            numbers[i] = 11
            leftHandNumber = numbers[i] - leftHand
            rightHandNumber = numbers[i] - rightHand
            if leftHandNumber < 0:
                leftHandNumber = leftHandNumber * -1
            if rightHandNumber < 0:
                rightHandNumber = rightHandNumber * -1

            leftdistance = (leftHandNumber % 3) + (leftHandNumber // 3)
            rightdistance = (rightHandNumber % 3) + (rightHandNumber // 3)
            if leftdistance > rightdistance:
                rightHand = numbers[i]
                result += "R"
            elif leftdistance < rightdistance:
                leftHand = numbers[i]
                result += "L"
            elif leftdistance == rightdistance:
                if hand == "right":
                    rightHand = numbers[i]
                    result += "R"
                else:
                    leftHand = numbers[i]
                    result += "L"
    return result

