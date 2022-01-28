

items = [4,5,88,4,75,2,7,277,1,47,8,174,1,478]
def finf_item(item , itemList):
    for i in range(0 , len(itemList)):
        if item == itemList[i]: 
            return i 

    return None 

print(finf_item(75 , items)) 
print(finf_item(7585 , items)) 
