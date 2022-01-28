

def get(x , y ):
    while(y != 0 ):
        t = x 
        x = y 
        y = t % y 
    return x 

print(get(20 , 8 ))
print(get(100 , 7 ))