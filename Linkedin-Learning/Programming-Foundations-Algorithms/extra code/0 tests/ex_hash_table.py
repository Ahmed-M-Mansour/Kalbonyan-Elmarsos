
# create hash Table with dict fun 
hashTable = dict(
    {"name": "Ahmed" ,
     "age": 22 , 
     "city": "6 of October City"  , 
     "favColors": ["blue" , "yellow" , "orange"]
    })

print(hashTable)


for key , value in hashTable.items():
    print("key: " , key , " --- And Its Value: " , value) 