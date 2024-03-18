"use strict";

const burger= document.querySelector('.burger');
const offmenu = document.querySelector('.off-menu');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    offmenu.classList.toggle('active');
})


