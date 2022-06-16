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
    font: 'Impact'
    },
    {
    text: 'Enter text here',
    size: 40,
    align: 'center',
    color: 'white',
    outLineColor: 'black',
    x: 250,
    y: 420,
    isDrag:false,
    font: 'Impact'
    }
    ],
   }

   function getMeme() {
       return gMeme
   }

function setImg(id) {
    gMeme.selectedImgId = id
}

function setFont(elFont) {
    gMeme.lines[gMeme.selectedLineIdx].font = elFont
}
   
function setText(text) {
    gMeme.lines[gMeme.selectedLineIdx].text = text
}

function alignText(direction) {
    gMeme.lines[gMeme.selectedLineIdx].align = direction
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
        isDrag:false,
        font: 'Impact'
        }
    gMeme.lines.push(newLine)
    gMeme.selectedLineIdx = gMeme.lines.length - 1;
}


function removeText() {
    gMeme.lines.splice(gMeme.selectedLineIdx,1)
    switchLines()
    // refrence from books - use gMeme - line - txt
// const bookIdx = gBooks.findIndex((book) =>
//     bookId === book.id)
//     gBooks.splice(bookIdx,1)
//     _saveBooksToStorage()
}

// DRAG AND DROP
function isTextClicked(clickedPos) {
    const {x} = gMeme.lines[gMeme.selectedLineIdx]
    const {y} = gMeme.lines[gMeme.selectedLineIdx]
    console.log(x)
    const distance = Math.sqrt((x - clickedPos.x) ** 2 + (y - clickedPos.y) ** 2)
    return distance <= gMeme.lines[gMeme.selectedLineIdx].size
}

function setTextDrag(isDrag) {
    gMeme.lines[gMeme.selectedLineIdx].isDrag = isDrag
}

function moveText(dx,dy){
    gMeme.lines[gMeme.selectedLineIdx].x += dx 
    gMeme.lines[gMeme.selectedLineIdx].y += dy 
}


