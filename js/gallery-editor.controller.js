'use strict'

function onInit() {
    renderGallery()
}


function renderGallery() {
    var gallery = getGallery()
    var imgs = getImgsForDisplay ()
    var strHTMLs = imgs.map(
        (img) =>
        `<img src="img/${img.id}.jpg" class="meme-img" onclick="onSelectedImg(this)" data-id="${img.id}">`
        )
        gallery.innerHTML = strHTMLs // .join('')
    }

   function onSelectedImg(elImg) {
    hideGallery()
    showEditor()
    renderMeme(elImg)
   }