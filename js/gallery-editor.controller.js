'use strict'


const gCanvas = document.querySelector('canvas')
const gCtx = gCanvas.getContext('2d')
   

function onInit() {
    renderGallery()
    renderMeme()
}

// RENDERS
function renderGallery() {
    var gallery = getGallery()
    var imgs = getImgsForDisplay ()
    var strHTMLs = imgs.map(
        (img) =>
        `<img src="img/${img.id}.jpg" class="meme-img" onclick="onSelectedImg(this)" data-id="${img.id}">`
        )
        gallery.innerHTML = strHTMLs.join('')
    }

    function renderMeme() {
        const meme = getMeme()
        drawImgById(meme.selectedImgId)
        meme.lines.forEach((line) => drawText(line))
    }

    function drawImgById(id) {
        var base_image = new Image();
        base_image.src = `img/${id}.jpg`
        gCtx.drawImage(base_image, 0, 0);
    }

    // GALLERY
   function onSelectedImg(elImg) {
    hideGallery()
    showEditor()
    setImg(elImg.dataset.id)
    renderMeme()
   }

    // EDITOR
   function onSetText(elText) {
        // need to set new text
        clearCanvas()
        setText(elText)
        renderMeme()
   }

function drawText(line) {
    // refrence miste-canvas in class
    gCtx.lineWidth = 1;
    gCtx.strokeStyle = line.outLineColor
    gCtx.textAlign = line.align
    gCtx.fillStyle = line.color
    gCtx.font = `${line.size}px ${gMeme.font}`;
    gCtx.fillText(line.text, line.x, line.y); //Draws (fills) a given text at the given (x, y) position.
    gCtx.strokeText(line.text, line.x, line.y); //Draws (strokes) a given text at the given (x, y) position.
}

function clearCanvas() {
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height);
}

function onChangeColor(elColorInput) {
    changeColor(elColorInput)
    renderMeme()
}
function onChangeOutLine(elOutLineInput) {
    changeOutLine(elOutLineInput)
    renderMeme()
}

function onIncreaseFont() {
    increaseFont()
    renderMeme()
}
function onDecreaseFont() {
    decreaseFont()
    renderMeme()
}

function onAddText() {
    addText()
    renderMeme()
}

function onSwitchLines() {
    switchLines()
    renderMeme()
}

// function onRemoveText() {
//     onRemoveText()
// }