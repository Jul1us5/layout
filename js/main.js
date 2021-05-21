"use strict";

const galleryImg = ['a1.jpeg', 'a2.jpeg', 'a3.jpeg'];

let where = document.querySelector('.img__wrap');
let leftArrow = document.querySelector('.left__arrow');
let rightArrow = document.querySelector('.right__arrow');

let HTML = '';
let img = '';
let position = 0;

HTML = `<img src="./img/gallery/${galleryImg[position]}" alt="img">`;
where.innerHTML = HTML;



function showGallery() {

    //  HTML = `<img src="./img/gallery/${galleryImg[position]}" alt="img">`;
    //  where.innerHTML = HTML;



    //  rightArrow.addEventListener('click', () => {
    //      position++;
    //      if (position > galleryImg.length - 1) {
    //          position = 0;
    //      }
    //      HTML = `<img src="./img/gallery/${galleryImg[position]}" alt="img">`;
    //      where.innerHTML = HTML;

    //  });

}

showGallery();

















// import rightArrow from './icons.js';

// let arrow = document.querySelector('.right__arrow');

// arrow.innerHTML = rightArrow;


// console.log(arrow);