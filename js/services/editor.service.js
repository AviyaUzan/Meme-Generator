'use strict'

const gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [ 
    {
    text: 'Enter text here',
    size: 40,
    align: 'center',
    color: 'white',
    outLineColor: 'black',
    x: 250,
    y: 80,
    isDrag:false,
    pressed: true
    },
    {
    text: 'Enter text here',
    size: 40,
    align: 'center',
    color: 'white',
    outLineColor: 'black',
    x: 250,
    y: 420,
    pressed: false,
    isDrag:false,
    }
    ],
    font: 'Impact'
   }

   var currLine = gMeme.lines[gMeme.selectedLineIdx]
   
   function getMeme() {
       return gMeme
   }

function setImg(id) {
    gMeme.selectedImgId = id
}
   
function setText(text) {
    currLine.text = text
}

function changeColor(elColorInput) {
    currLine.color = elColorInput.value;
}
function changeOutLine(elOutLineInput) {
    currLine.outLineColor = elOutLineInput.value;
}

function increaseFont() {
    currLine.size += 1
}

function decreaseFont() {
    currLine.size -= 1
}

function switchLines() {
    gMeme.selectedLineIdx ++
    if(gMeme.selectedLineIdx >= gMeme.lines.length){
        gMeme.selectedLineIdx = 0
    }
    // if(gMeme.lines[gMeme.selectedLineIdx].pressed) {

    // }
}

function addText() {
    var newLine = {
        text: 'Enter text here',
        size: 40,
        align: 'center',
        color: 'white',
        outLineColor: 'black',
        x: 250,
        y: 250,
        pressed: true,
        isDrag:false,
        }
    gMeme.lines.push(newLine)
    gMeme.selectedLineIdx = gMeme.lines.length - 1;
}


function removeText() {
    // refrence from books - use gMeme - line - txt
// const bookIdx = gBooks.findIndex((book) =>
//     bookId === book.id)
//     gBooks.splice(bookIdx,1)
//     _saveBooksToStorage()
}

// DRAG AND DROP
function isTextClicked(clickedPos) {
    const {x} = currLine
    const {y} = currLine
    console.log(x)
    const distance = Math.sqrt((x - clickedPos.x) ** 2 + (y - clickedPos.y) ** 2)
    return distance <= currLine.size
}

function setTextDrag(isDrag) {
    currLine.isDrag = isDrag
}

function moveText(dx,dy){
    currLine.x += dx 
    currLine.y += dy 
}


