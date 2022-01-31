let notes = [] ;

const filters = {
    searchText: '' , 
}

const noteJson = localStorage.getItem('notes') ; 
if(noteJson !== null){
    notes = JSON.parse(noteJson) ; 
}

const renderNotes = (notes , filters) => {
    const filterNotes = notes.filter(note => {
        return note.title.toLowerCase().includes(filters.searchText) ; 
    })
    console.log(filterNotes)
    document.querySelector('#notes').innerHTML = '' ; 

    filterNotes.forEach(note => {
        const noteEl = document.createElement('p') ; 
        if(noteEl.title.length > 0 )  noteEl.textContent = note.title ; 
        else noteEl.textContent = 'Unnamed Note '
        
        document.querySelector('#notes').appendChild(noteEl) ; 
    })
}
renderNotes(notes , filters) ; 


// to create a new note 
document.getElementById('create-note').addEventListener('click' , e => {
    notes.push({
        title: '' , 
        body: '' 
    }) ; 
    localStorage.setItem('notes' , JSON.stringify(notes)) ; 
    renderNotes(notes , filters) ; 

})

document.getElementById('inp').addEventListener('input' , e => {
    filters.searchText = e.target.value ; 
    renderNotes(notes , filters) ; 

})

//------------------------------------------------------------------------------
// // handle the form 
// document.getElementById('name-form').addEventListener('submit' , e => {
//     e.preventDefault() ; 
//     console.log(e.target.elements.firstName.value) ; 
//     e.target.elements.firstName.value = '' ; 
// })
//------------------------------------------------------------------------------
// // handle check box 
// document.getElementById('forTest').addEventListener('change' , e => {
//     console.log(e.target.checked) ; 
// })
// // function getVal() {
// //     const val = document.querySelector('input').value;
// //     console.log(val);
// //   }


// // selcet one element 
// const p = document.querySelector('p').textContent ; 
// console.log(p) ; 
// // p.remove() ; 

// // select all elements 
// const spans = document.querySelectorAll('span') ; 
// spans.forEach(span => {
//     span.remove() ; 
// })


// const newP = document.createElement('p') ; 
// newP.textContent = 'New p from JS ' ; 
// document.querySelector('div').appendChild(newP) ;  


// const btn = document.getElementById('btn').addEventListener('click' , e => {
//     e.target.textContent = ' The button was clicked' 
// }) ; 