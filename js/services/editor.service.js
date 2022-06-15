'use strict'

const gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [ 
    {
    text: 'Enter text here',
    size: 20,
    align: 'center',
    color: 'white',
    outLineColor: 'black',
    x: 100,
    y: 100,
    }
    ],
    font: 'Impact'
   }

function setImg(id) {
    gMeme.selectedImgId = id
}
   
function setText(text) {
    gMeme.lines[gMeme.selectedLineIdx].text = text
}


function getMeme() {
    return gMeme
}

function changeColor(elColorInput) {
    gMeme.lines[gMeme.selectedLineIdx].color = elColorInput.value;
}
function changeOutLine(elOutLineInput) {
    gMeme.lines[gMeme.selectedLineIdx].outLineColor = elOutLineInput.value;
}

function increaseFont() {
    gMeme.lines[gMeme.selectedLineIdx].size += 1
}

function decreaseFont() {
    gMeme.lines[gMeme.selectedLineIdx].size -= 1
}

function addText() {
    var newLine = {
        text: 'Enter text here',
        size: 20,
        align: 'center',
        color: 'white',
        outLineColor: 'black',
        x: 100,
        y: 100,
        }
    gMeme.lines.push(newLine)
}


function removeText() {
    // refrence from books - use gMeme - line - txt
// const bookIdx = gBooks.findIndex((book) =>
//     bookId === book.id)
//     gBooks.splice(bookIdx,1)
//     _saveBooksToStorage()
}




