const textarea = document.getElementById('texta')
const title = document.getElementById('title')
const title_color = document.getElementById('title_color')
const message = document.getElementById('message')
const message_color = document.getElementById('message_color')
const title_display = document.getElementById('title_display')
const message_display = document.getElementById('message_display')



title.addEventListener('change', editTitle);
message.addEventListener('change', editMessage);
title_color.addEventListener('change', changeTitlecolor);
message_color.addEventListener('change', changeMessagecolor);
textarea.addEventListener('change', updateTextarea)

function updateTextarea(e) {
    textarea.textContent = e.target.value;
}


function editTitle(e) {
    title_display.textContent = e.target.value;
}

function editMessage(e) {
    message_display.textContent = e.target.value;
}

function changeTitlecolor(e) {
    title_display.style.color = e.target.value;
}

function changeMessagecolor(e) {
    message_display.style.color = e.target.value;
}