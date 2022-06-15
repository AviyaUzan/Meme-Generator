'use strict'

const gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [ 
    {
    text: 'I sometimes eat Falafel',
    size: 20,
    align: 'center',
    color: 'black',
    x: 100,
    y: 100,
    }
    ],
    font: 'Impact'
   }
   
const gCanvas = document.querySelector('canvas')
const gCtx = gCanvas.getContext('2d')


function drawText(line) {
    // refrence miste-canvas in class
    gCtx.lineWidth = 1;
    gCtx.strokeStyle = 'white';
    gCtx.textAlign = line.align
    gCtx.fillStyle = line.color
    gCtx.font = `${line.size}px ${gMeme.font}`;
    gCtx.fillText(line.text, 100, 20); //Draws (fills) a given text at the given (x, y) position.
    gCtx.strokeText(line.text, 100, 20); //Draws (strokes) a given text at the given (x, y) position.
    console.log('Called 2')
}

function setText(text) {
    gMeme.lines[0].text = text
}

function clearCanvas() {
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height);
}
function getMeme() {
    return gMeme
}

function removeText() {
    // refrence from books - use gMeme - line - txt
// const bookIdx = gBooks.findIndex((book) =>
//     bookId === book.id)
//     gBooks.splice(bookIdx,1)
//     _saveBooksToStorage()
}




