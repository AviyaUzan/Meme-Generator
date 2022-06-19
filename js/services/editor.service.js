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
    x:130,
    y: 80,
    isDrag:false,
    isPressed:true,
    font: 'Impact'
    },
    {
    text: 'Enter text here',
    size: 40,
    align: 'center',
    color: 'white',
    outLineColor: 'black',
    x: 130,
    y: 420,
    isDrag:false,
    isPressed:true,
    font: 'Impact'
    }
    ],
   }



   const STORAGE_KEY = 'memesDB'

   function loadMemes () {
    var memes = loadFromStorage(STORAGE_KEY)
    if(!memes) {
        memes = []
    }
    return memes
   }

   function saveMeme () {
    var memes = loadMemes ()
    memes.push(gMeme)
    _saveMemesToStorage(memes)
   }

   function _saveMemesToStorage(memes){
    saveToStorage(STORAGE_KEY, memes)
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

function alignText(direction,canvas,width) {
    gMeme.lines[gMeme.selectedLineIdx].align = direction
    if(direction === 'center'){
        gMeme.lines[gMeme.selectedLineIdx].x = (canvas.width-width)/2
    }
    if(direction === 'left'){
        gMeme.lines[gMeme.selectedLineIdx].x = 0
    }
    if(direction === 'right'){
        gMeme.lines[gMeme.selectedLineIdx].x =  canvas.width - width
    }
    return gMeme.lines[gMeme.selectedLineIdx].x
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
        x: 130,
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
function isTextClicked(clickedPos, height, width) {
    const {x,y}   = clickedPos;
    console.log('x,y',x,y)
    const selectedLineIdx= gMeme.lines.findIndex(line=>x>=line.x && x<=line.x+width&&y<=line.y&&y>=line.y-height)
    console.log(selectedLineIdx);
    if(selectedLineIdx === -1) return false
    gMeme.selectedLineIdx=selectedLineIdx
    return true
}

function setTextDrag(isDrag) {
    gMeme.lines[gMeme.selectedLineIdx].isDrag = isDrag
}

function moveText(dx,dy){
    gMeme.lines[gMeme.selectedLineIdx].x += dx 
    gMeme.lines[gMeme.selectedLineIdx].y += dy 
}


