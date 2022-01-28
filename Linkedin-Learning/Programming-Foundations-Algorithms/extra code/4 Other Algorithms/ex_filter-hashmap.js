let list = [ "Ahmed" , "Mohamed" , "Mansour" , "Mohamed" , "Ahmed"]  ; 


const uniq =[ ...new Set(list) ] ;  

console.log(uniq)


let listTwo = [5,4,7,6,1,3,58,4,8,9,8,81,2,81,1,1,5]  ; 

const filterList = (listTwo.filter(function(ele , pos){
    return listTwo.indexOf(ele) == pos ; 
    
})).sort() 

console.log(filterList)
