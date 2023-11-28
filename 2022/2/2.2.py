def shape_score(shape):
    if(shape == "A"):
        return 1
    elif(shape == "B"):
        return 2
    else:
        return 3

def determine_win(one, two):
    if(two == "X"):
        if(one == "A"):
            return 0 + shape_score("C")
        if(one == "B"):
            return 0 + shape_score("A")
        if(one == "C"):
            return 0 + shape_score("B")
    if(two == "Y"):
        if(one == "A"):
            return 3 + shape_score("A")
        if(one == "B"):
            return 3 +  shape_score("B")
        if(one == "C"):
            return 3 + shape_score("C")
    if(two == "Z"):
        if(one == "A"):
            return 6 + shape_score("B")
        if(one == "B"):
            return 6 + shape_score("C")
        if(one == "C"):
            return 6 + shape_score("A")

score = 0
f = open(".\\2\input.txt")
text = f.readlines()

for line in text:
    if(line != ""):
        a = line.replace("\n", "").split(" ")
        t = determine_win(a[0], a[1])
        if(t == None):
            print(t)
        score += t

print(score)