const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
let game1 ;



window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    render() ; 

})
const render =()=>{
    puzzleEl.innerHTML = '' ; 
    guessesEl.textContent = game1.statusMessage ; 

    const splitCh = game1.puzzle.split('') ; 
    splitCh.forEach(letter => {
        const letterEl = document.createElement('span'); 
        letterEl.textContent = letter ; 
        puzzleEl.appendChild(letterEl); 
    });
   
}
const startCame = async()=>{
    const puzzle = await getPuzzle('2') ; 
    game1 = new Hangman(puzzle , 5) ; 
    render() ;
}
document.getElementById('reset').addEventListener('click' , startCame)
startCame(); 

//---------------------------------------------------------------------------------------
// getPuzzle('2').then( (puzzle) =>{
//     console.log(puzzle) ; 
// } ).catch( (err) =>{
//     console.log(err) ; 
// })

// getCurrentCountry().then(country=>{
//     console.log(country , 'from  getCurrentCountry ') ; 
// }).catch(err=>{
//     console.log(err) ; 
// })

// getLocation().then(location=>{
//      return getCountry(location.country);
// }).then(country=>{
//     console.log(country) ; 
// }).catch(err=>{
//     console.log(err) ; 
// })

// getCountry('EG').then( country =>{
//     console.log(country) ; 
// } ).catch( (err) =>{
//     console.log(err) ; 
// })


// fetch('http://puzzle.mead.io/puzzle' ).then((response)=>{
//        if(response.status===200){
//             return response.json() ; 
//        }  else throw  new Error('unable to fetch')
// }).then(data =>{
//     console.log( 'from fetch ',data.puzzle)
// }).catch(err=>{
//     console.log(err) ; 
// })

// getPuzzle((error, puzzle) => {
//     if (error) {
//         console.log(`Error: ${error}`)
//     } else {
//         console.log(puzzle)
//     }
// })

// getCountry('EG' , (error , country)=>{
//     error ? console.log(error) : console.log(country.name) ; 
// })