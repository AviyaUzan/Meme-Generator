'use strict'

const gGallery = document.querySelector('.gallery')
const gEditor = document.querySelector('.main-editor')
const gGalleryContainer = document.querySelector('.content-container')

var gKeywordSearchCountMap = {'funny': 12,'cat': 16, 'baby': 2}
const gImgs = [
    {id: 1, keywords: ['funny', 'politics']},
    {id: 2, keywords: ['dog', 'animals']},
    {id: 3, keywords: ['baby', 'dog' , 'animals']},
    {id: 4, keywords: ['baby', 'dog' , 'animals']},
    {id: 5, keywords: ['baby', 'dog' , 'animals']},
    {id: 6, keywords: ['baby', 'dog' , 'animals']},
    {id: 9, keywords: ['baby', 'dog' , 'animals']},
    {id: 10, keywords: ['baby', 'dog' , 'animals']},
    {id: 11, keywords: ['baby', 'dog' , 'animals']},
    {id: 12, keywords: ['baby', 'dog' , 'animals']},
    {id: 13, keywords: ['baby', 'dog' , 'animals']},
    {id: 14, keywords: ['baby', 'dog' , 'animals']},
    {id: 15, keywords: ['baby', 'dog' , 'animals']},
    {id: 16, keywords: ['baby', 'dog' , 'animals']},
    {id: 17, keywords: ['baby', 'dog' , 'animals']},
    {id: 18, keywords: ['baby', 'dog' , 'animals']},
]

function getImgsForDisplay () {
    return gImgs
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