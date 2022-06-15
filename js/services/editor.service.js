'use strict'

const gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [ 
    {
    txt: 'I sometimes eat Falafel',
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

function renderMeme(elImg) {
    const imgId = elImg.dataset.id
    var base_image = new Image();
    base_image.src = `img/${imgId}.jpg`
    base_image.onload = function(){
    gCtx.drawImage(base_image, 0, 0);
}
gCtx.drawText('add text here', 100, 100)
}

function drawText(text, x, y) {
    gCtx.lineWidth = 2;
    gCtx.strokeStyle = gOutLine;
    gCtx.fillStyle = gColor;
    gCtx.font = '40px Arial';
    gCtx.fillText(text, x, y); //Draws (fills) a given text at the given (x, y) position.
    gCtx.strokeText(text, x, y); //Draws (strokes) a given text at the given (x, y) position.
}


