def shape_score(shape):
    if(shape == "X"):
        return 1
    elif(shape == "Y"):
        return 2
    else:
        return 3
def determine_win(one, two):
    if(one == "A"):
        if(two == "X"):
            return 2
        if(two == "Y"):
            return 1
        if(two == "Z"):
            return 0
    if(one == "B"):
        if(two == "Y"):
            return 2
        if(two == "Z"):
            return 1
        if(two == "X"):
            return 0
    if(one == "C"):
        if(two == "Z"):
            return 2
        if(two == "X"):
            return 1
        if(two == "Y"):
            return 0


score = 0
f = open(".\\2\input.txt")
text = f.readlines()
for line in text:
    print(line)
    if(line != ""):
        a = line.replace("\n", "").split(" ")
        score += shape_score(a[1])
        result = determine_win(a[0], a[1])
        print(result)
        if(result == 2):
            score += 3
        elif(result == 1):
            score += 6

print(score)