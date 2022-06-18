'use strict'


function toggleMenu() {
    document.body.classList.toggle('menu-open');
}

function showModal() {
   var modal = document.querySelector('.modal')
   modal.classList.toggle('hidden'); 
}

function closeModal() {
    var modal = document.querySelector('.modal')
    modal.classList.add('slide-out-elliptic-top-bck');
    setTimeout(removeAnime, 1000)
}

function removeAnime() {
    var modal = document.querySelector('.modal')
    modal.classList.toggle('hidden');
    modal.classList.remove('slide-out-elliptic-top-bck')
}