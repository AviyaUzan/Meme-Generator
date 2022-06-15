'use strict'

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
        gallery.innerHTML = strHTMLs // .join('')
    }

    function renderMeme() {
        const meme = getMeme()
        drawImgById(meme.selectedImgId)
        drawText(meme.lines[0])
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
    drawImgById(elImg.dataset.id)
   }

   // CONTROLLER
   function onSetText(elText) {
    // need to set new text
    onClearCanvas()
       setText(elText)
        renderMeme()
   }

   function onClearCanvas() {
    clearCanvas()
}

function onRemoveText() {
    onRemoveText()
}