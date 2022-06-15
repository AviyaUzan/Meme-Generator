'use strict'

const gGallery = document.querySelector('.gallery')
const gEditor = document.querySelector('.main-editor')

var gKeywordSearchCountMap = {'funny': 12,'cat': 16, 'baby': 2}
const gImgs = [
    {id: 1, keywords: ['funny', 'politics']},
    {id: 2, keywords: ['dog', 'animals']},
    {id: 3, keywords: ['baby', 'dog' , 'animals']},
]

function getImgsForDisplay () {
    return gImgs
}

function getGallery() {
    return gGallery
}

function hideGallery() {
    gGallery.classList.add('hidden')
}

function showEditor(){
    gEditor.classList.remove('hidden')
}