items = [6, 20, 8, 19, 56, 23, 87, 41, 49, 53]

def find_max(items):
    # breaking condition: last item in list? return it
    if len(items) == 1:
        return items[0]

    op1 = items[0]
    print(op1)
    op2 = find_max(items[1:])
    print(op1, op2)

    # perform the comparison when we're down to just two
    if op1 > op2:
        return op1
    else:
        return op2

print(find_max(items))