//-- 1- : Declarar las variables mediante el DOM
const allform = document.querySelector('#note-form')
const inputNote = document.querySelector('#note-input')
const btnSub = document.querySelector('#submit')
const noteList = document.querySelector('.notes')
const deleteAllNotes = document.querySelector('#erase-list')
const btnErase = document.querySelector('.erase')


//--2-: Hacer el Local Store

let noteStorage = []

if (localStorage.getItem('notes')) {  //-- si recibe informacion el input
    noteStorage = JSON.parse(localStorage.getItem('notes'))  // transforma la nota almacenada en un objeto
} else {  // SI NO RECIBE NADA LA INPUT
    noteStorage = []
}

//--3-: HAY QUE CREAR UNA EVENT LISTENER

allform.addEventListener('submit', e => {
    e.preventDefault() //cancela y se mantiene
    noteStorage.push(inputNote.value) //--para que se vaya agregando notas a la lista
    localStorage.setItem('notes', JSON.stringify(noteStorage)) // con el stringify hara que el valor se convierta en una cadena JSON
    listBuilder(inputNote.value) //
    inputNote.value = ''
})

//--4-: CREAR LA NOTA

const listBuilder = (text) => {
    const listOfNote = document.createElement('li')
    listOfNote.innerHTML = `${text} <button class='save' onclick="deleteNote(this)">X</button>`
    noteList.appendChild(listOfNote)
}

//--5-: ELIMINAR LA NOTA

const deleteNote = (btn) => {
    let noteErase = btn.parentNode
    const index = noteStorage.indexOf(noteErase)
    noteStorage.splice(index, 1)
    localStorage.setItem('notes', JSON.stringify(noteStorage))
    noteErase.remove()
}

//--6-: Realizar con un boton, borrar toda la lista creada.

btnErase.onclick = (e) => {
    e.preventDefault()
    //let index = noteStorage.indexOf(noteStorage)
    noteStorage.splice(0)
    localStorage.setItem('notes', JSON.stringify(noteStorage))
    noteStorage.remove()
}



console.log(localStorage);