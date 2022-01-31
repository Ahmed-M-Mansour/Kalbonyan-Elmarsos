// Modern way to fetch data 
const getPuzzle = async (wordCount) =>{
    let response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`) ; 
    if(response.status===200){
        const data = await response.json() ; 
        return data.puzzle ; 
    }else {
        throw new Error('Can not fetch ') ; 
    }
}
const getCountry = async (countryCode) =>{
    const response = await fetch('http://api.countrylayer.com/v2/all?access_key=1b076e568574f689056b3382ef849dea')
    if(response){
        let data = await response.json() ; 
        data =  data.find((country) => country.alpha2Code === countryCode) ; 
        return data.name ; 
    }else {
        throw new Error('unable to fetch country ') 
    }

}
const getLocation = async  ()=>{
    const response= await fetch('http://ipinfo.io/json?token=a7de8ab1fad90e')
        if(response){
            let data= await response.json() ; 
            return data ; 
        }else {
            throw new Error('unable to fetch the data') ;
        }
}

const getCurrentCountry = async  ()=>{
    const location = await getLocation() ; 
    const country = await getCountry(location.country) ; 
    return country ; 
   
}
//-------------------------------------- End of The Real code --------------------------------
// old modern 
// const getPuzzleOld = (wordCount) =>{
//     return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then(response=>{
//         if(response.status===200){
//             return response.json()
//         } else {
//             throw new Error('unable to fetch puzzle')
//         }
//     }).then(data=>{
//         return data.puzzle ; 
//     })
// }

// // old modern 
// const getCountryOld = (countryCode) =>{
//     return fetch('http://api.countrylayer.com/v2/all?access_key=1b076e568574f689056b3382ef849dea').then(response=>{
//         if(response){
//             return response.json()
//         }else {
//             throw new Error('unable to fetch country ') 
//         }
//     }).then(data=>{
//         const country = data.find((country) => country.alpha2Code === countryCode) ; 
//         return country.name ; 
//     })
// }

// old way to fetch data 
// const getPuzzle = (wordCount) => new Promise((resolve , reject) => {
//     const request = new XMLHttpRequest()
//     request.addEventListener('readystatechange', (e) => {
//         if (e.target.readyState === 4 && e.target.status === 200) {
//             const data = JSON.parse(e.target.responseText)
//             resolve(data.puzzle)
//             // callback(undefined, data.puzzle)
//         } else if (e.target.readyState === 4) {
//             reject('An error has taken place'); 
//             // callback('An error has taken place', undefined)
//         }
//     })

//     request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
//     request.send()
// })



// const getCountry = (countryCode) => new Promise((resolve, reject) => {
//     const countryRequest = new XMLHttpRequest()

//     countryRequest.addEventListener('readystatechange', (e) => {
//         if (e.target.readyState === 4 && e.target.status === 200) {
//             const data = JSON.parse(e.target.responseText)
//             const country = data.find((country) => country.alpha2Code === countryCode)
//             resolve(country)
//         } else if (e.target.readyStatet === 4) {
//             reject('Unable to fetch data')
//         }
//     })
//     countryRequest.open('GET', 'http://api.countrylayer.com/v2/all?access_key=1b076e568574f689056b3382ef849dea')
//     countryRequest.send()
// })

// const getCountry = (countryCode) => new Promise( (resolve , reject) =>{
//     // Making an HTTP request
//     const countryRequest = new XMLHttpRequest()
//     countryRequest.addEventListener('readystatechange', (e) => {
//         if (e.target.readyState === 4 && e.target.status === 200) {
//             const data = JSON.parse(e.target.responseText)
//             const country = data.find((country) => country.alpha2Code === countryCode)
//             resolve(country.name)
//         } else if (e.target.readyStatet === 4) {
//            reject('Unable to fetch data')
//         }
// })
// countryRequest.open('GET', 'http://api.countrylayer.com/v2/all?access_key=1b076e568574f689056b3382ef849dea')
// countryRequest.send()
// })

