
# create a bubble sort function 

def bubble(dataset):
    for i in range(len(dataset)-1 , 0 , -1 ):
        for j in range(i):
            if dataset[j] > dataset[j+1]:
                temp = dataset[j] 
                dataset[j] = dataset[j+1]
                dataset[j+1] = temp 
        print("Current State" , dataset )


def main():
    listone = [5,4,47,478,5999,2,0,698,14,588,]
    print(" Starting State :" , listone)
    bubble(listone) 
    print("final State :  " , listone) 

main()  