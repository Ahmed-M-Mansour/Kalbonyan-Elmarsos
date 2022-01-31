const button = document.getElementById('button') ; 
const audioElement = document.getElementById('audio') ; 
// Disable and Enable Button 
const toggleButton = () => {
    button.disabled = ! button.disabled ; 
}

// passing a joke to VoiceRSS 
const tellmeJoke = joke => {
    console.log('My Joke' , joke) ; 
    VoiceRSS.speech({
        key: '0c36c1bacf284f94965ec2753846307d',
        src: joke,
        hl: 'en-us',
        v: 'Linda',
        r: 0, 
        c: 'mp3',
        f: '44khz_16bit_stereo',
        ssml: false
    });
}
// get jokes from joke API 
async function getJokes(){
    let joke ; 
    const apiUrl = 'https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=nsfw,racist,sexist';
    try{
        const response = await fetch(apiUrl) ; 
        const data = await response.json(); 
        console.log(data) ;
        data.setup ? joke = `${data.setup}  ... ${data.delivery}` : joke = data.joke ; 
       // text to speetch 
        tellmeJoke(joke) ;
       // Disable button 
       toggleButton() ; 
    }catch(error){
        console.log('whoops' ,error) ; 
    }
}
// Event Lisitener 
button.addEventListener('click' , getJokes) ; 
audioElement.addEventListener('ended' , toggleButton )