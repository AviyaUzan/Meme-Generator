'use strict'

const gGallery = document.querySelector('.gallery')
const gEditor = document.querySelector('.main-editor')
const gGalleryContainer = document.querySelector('.content-container')

const gImgs = [
    {id: 1, keywords: ['funny', 'politics']},
    {id: 2, keywords: ['dog', 'animals']},
    {id: 3, keywords: ['baby', 'dog' , 'animals']},
    {id: 4, keywords: ['cat', 'animals']},
    {id: 5, keywords: ['baby', 'victory']},
    {id: 6, keywords: ['funny', 'explain']},
    {id: 9, keywords: ['baby', 'laugh']},
    {id: 10, keywords: ['politics', 'laugh']},
    {id: 11, keywords: ['wrestling']},
    {id: 12, keywords: ['old']},
    {id: 13, keywords: ['toast']},
    {id: 14, keywords: ['glasses']},
    {id: 15, keywords: ['close' , 'zero']},
    {id: 16, keywords: ['laugh']},
    {id: 17, keywords: ['politics']},
    {id: 18, keywords: ['cartoon', 'explain']},
]

var gFilterBy = { word: '' }

function getImgsForDisplay () {
    const imgs = gImgs.filter(img =>
        img.keywords.some(keyword => keyword.includes(gFilterBy.word))
      )
    return imgs
}

function setFilterBy(word) {
    gFilterBy.word = word
}

function showGallery() {
    gGalleryContainer.classList.remove('hidden')
    gEditor.classList.add('hidden')
}
function getGallery() {
    return gGallery
}

function hideGallery() {
    gGalleryContainer.classList.add('hidden')
    
}

function showEditor(){
    gEditor.classList.remove('hidden')
}