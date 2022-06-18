'use strict'


const gCanvas = document.querySelector('canvas')
const gCtx = gCanvas.getContext('2d')
const gTouchEvs = ['touchstart', 'touchmove', 'touchend']

var gStartPos

function onInit(ev) {
    addMouseListeners(ev)
    addTouchListeners(ev)
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
        showGallery()
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

   function onSearch(elInput) {
    const filteredImgs = filteredImgs(elInput)

   }

    // EDITOR

    function onSaveMeme() {
        saveMeme()
    }

   function onSetText(elText) {
        clearCanvas()
        setText(elText)
        renderMeme()
   }

function drawText(line) {
    // refrence miste-canvas in class
    var meme = getMeme()
    gCtx.lineWidth = 1;
    gCtx.strokeStyle = line.outLineColor
    gCtx.textAlign = line.align
    gCtx.fillStyle = line.color
    gCtx.font = `${line.size}px ${meme.lines[meme.selectedLineIdx].font}`;
    gCtx.fillText(line.text, line.x, line.y); //Draws (fills) a given text at the given (x, y) position.
    gCtx.strokeText(line.text, line.x, line.y); //Draws (strokes) a given text at the given (x, y) position.

    if(line.isPressed){
        gCtx.beginPath()
        gCtx.strokeStyle = 'rgba(255, 255, 255, 0.8)';
        gCtx.fillStyle = 'rgba(255, 255, 255, 0.4)';
        gCtx.strokeRect(line.x, line.y - line.size / 2, line.text.width, line.size);
        gCtx.fillRect(line.x, line.y - line.size / 2, line.text.width, line.size);
    }
}

function onAlignText(direction) {
    alignText(direction)
    renderMeme()
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

function onRemoveText() {
    removeText()
    renderMeme()
}

function onSelectFont(elFont) {
    setFont(elFont)
    renderMeme()
}

// Touch Events
function addTouchListeners() {
    gCanvas.addEventListener('touchmove', onMove)
    gCanvas.addEventListener('touchstart', onDown)
    gCanvas.addEventListener('touchend', onUp)
  }
  
  function addMouseListeners() {
      gCanvas.addEventListener('mousemove', onMove)
      gCanvas.addEventListener('mousedown', onDown)
      gCanvas.addEventListener('mouseup', onUp)
  }

  function getEvPos(ev) {

    //Gets the offset pos , the default pos
    var pos = {
        x: ev.offsetX,
        y: ev.offsetY
    }
    // Check if its a touch ev
    if (gTouchEvs.includes(ev.type)) {
        //soo we will not trigger the mouse ev
        ev.preventDefault()
        //Gets the first touch point
        ev = ev.changedTouches[0]
        //Calc the right pos according to the touch screen
        pos = {
            x: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
            y: ev.pageY - ev.target.offsetTop - ev.target.clientTop
        }
    }
    return pos
}

function onDown(ev) {
    //Get the ev pos from mouse or touch
    const pos = getEvPos(ev)
    if (!isTextClicked(pos)) return
    setTextDrag(true)
    //Save the pos we start from 
    gStartPos = pos
    console.log('gStartPos',gStartPos)
    gCanvas.style.cursor = 'grabbing'
}

function onMove(ev) {
    const meme = getMeme();
    if (meme.lines[meme.selectedLineIdx].isDrag) {
        const pos = getEvPos(ev)
        //Calc the delta , the diff we moved
        const dx = pos.x - gStartPos.x
        const dy = pos.y - gStartPos.y
        moveText(dx, dy)
        //Save the last pos , we remember where we`ve been and move accordingly
        gStartPos = pos
        //The canvas is render again after every move
        renderMeme()
    }
}

function onUp() {
    setTextDrag(false)
    const meme = getMeme()
    if(gStartPos.x === meme.lines[meme.selectedLineIdx].x && gStartPos.y === meme.lines[meme.selectedLineIdx].y) {
        gCanvas.style.cursor = 'grab'
    } else {
        gCanvas.style.cursor = 'default'
    }
}

// DOWNLOAD
function downloadCanvas(elLink) {
      const data = gCanvas.toDataURL('image/jpeg')
      elLink.href = data
      elLink.download = 'Canvas' // file name
}

// SHARE 
function uploadImg() {
    const imgDataUrl = gCanvas.toDataURL("image/jpeg");// Gets the canvas content as an image format
  
    // A function to be called if request succeeds
    function onSuccess(uploadedImgUrl) {
        //Encode the instance of certain characters in the url
        const encodedUploadedImgUrl = encodeURIComponent(uploadedImgUrl)
        // document.querySelector('.user-msg').innerText = `Your photo is available here: ${uploadedImgUrl}`
        //Create a link that on click will make a post in facebook with the image we uploaded
        document.querySelector('.save-meme').innerHTML = `
        <a class="btn" href="https://www.facebook.com/sharer/sharer.php?u=${encodedUploadedImgUrl}&t=${encodedUploadedImgUrl}" title="Share on Facebook" target="_blank" onclick="window.open('https://www.facebook.com/sharer/sharer.php?u=${uploadedImgUrl}&t=${uploadedImgUrl}'); return false;">
           Click Again   
        </a>`
    }
    //Send the image to the server
    doUploadImg(imgDataUrl, onSuccess);
}
  
  function doUploadImg(imgDataUrl, onSuccess) {
    //Pack the image for delivery
    const formData = new FormData();
    formData.append('img', imgDataUrl)
    //Send a post req with the image to the server
    fetch('//ca-upload.com/here/upload.php', {
        method: 'POST',
        body: formData
    })   //Gets the result and extract the text/ url from it
        .then(res => res.text())
        .then((url) => {
            console.log('Got back live url:', url);
            //Pass the url we got to the callBack func onSuccess, that will create the link to facebook
            onSuccess(url)
        })
        .catch((err) => {
            console.error(err)
        })
}
