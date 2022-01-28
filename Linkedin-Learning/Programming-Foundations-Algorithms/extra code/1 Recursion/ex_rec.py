
# countdown fun 
def countDown(x):
    if(x == 0 ):
        print("Done") 
    else:
        print(x) 
        countDown(x-1)

countDown(9)