def calc():
    print("Enter the first number ")
    fNumber = float(input())
    print("Enter the first number ")
    sNumber = float(input())
    print("Enter the first operation ")
    operation = input() 

    if operation == '*':
        result = fNumber *  sNumber
    elif operation == '/':
        result = fNumber / sNumber
    elif operation == '+':
        result = fNumber + sNumber
    elif operation == '-':
        result = fNumber - sNumber
    else:
        print("you enter wrong operation ")
    print(result )



calc()