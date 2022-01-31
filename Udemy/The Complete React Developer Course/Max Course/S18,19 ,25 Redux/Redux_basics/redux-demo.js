const redux = require('redux') ; 

const counterReducer =(state = {counter:0} , action) => {
    if(action.type === 'inc' ) {
        return {
            counter: state.counter +1 
        }
    }

    if(action.type === 'dec' ) {
        return {
            counter: state.counter -1 
        }
    }
    return state  ;
}
// create the store 
const store = redux.createStore(counterReducerte ) ; 
console.log(store.getState())  // print intialte 
// get the last state 
const counterSucscriber = () => {
    const lastState = store.getState() ; 
    console.log(lastState)
}
// subscribe the state function 
store.subscribe(counterSucscriber) ; 
// change the state depends on actions 
store.dispatch({type: 'inc'}) 
store.dispatch({type: 'inc'}) 
store.dispatch({type: 'dec'}) 


