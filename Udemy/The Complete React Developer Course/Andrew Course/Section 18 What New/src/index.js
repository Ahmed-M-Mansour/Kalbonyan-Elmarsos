import ReactDOM from "react-dom";
import React, { useState, useEffect, useReducer } from "react";

const notesReducer = (state, action) => {
	switch (action.type) {
		case 'POPULATE_NOTES':
			return action.notes
		case 'ADD_NOTE':
			return [
				...state,
				{ title: action.title,body: action.body }
			]
		case 'REMOVE_NOTE':
			return state.filter(note => note.title !== action.title)
		default:
			return state
	}
}

const NoteApp =  () => {
	const [notes, dispatch] = useReducer(notesReducer, [])
	const [ title, setTitle ] = useState('')
	const [ body, setBody ] = useState('')
	const addNote = (e) => {
		e.preventDefault()
		dispatch({
			type: 'ADD_NOTE',
			title,
			body,
		})
		setTitle('')
		setBody('')
	}
	const removeNote = (title) => {
		dispatch({
			type: 'REMOVE_NOTE',
			title,
		})
	}
	useEffect(() => {
		const notes = JSON.parse(localStorage.getItem('notes'))
		if(notes){
			dispatch({
				type: 'POPULATE_NOTES',
				notes,
			})
		}
	}, [])
	useEffect(() => {
		localStorage.setItem('notes', JSON.stringify(notes))
	}, [notes])
	return (
		<div>
			<h1>Mansour Notes</h1>
			{notes.map(note => (
				<Note key={note.title } note={note} removeNote={removeNote} />
			))}
			<h3>Add new note</h3>
			<form onSubmit={addNote}>
				<input value={title} onChange={(e) => setTitle(e.target.value) } ></input>
				<textarea value={body} onChange={(e) => setBody(e.target.value) } ></textarea>
				<button>+</button>
			</form>
		</div>
	)
}

const Note = ({note, removeNote}) => {
	useEffect(() => {
		console.log('Setting note')
		return () => {
			console.log('Cleaning up')
		}
	}, [])

	return (
	<div >
			<h3>{note.title}</h3>
			<p>{note.body}</p>
			<button onClick={() => removeNote(note.title)}>-</button>
	</div>
	)
}

ReactDOM.render(
	<NoteApp
		
	/>,
	document.getElementById('app')
)