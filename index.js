const change = document.getElementById("change");
const color = document.getElementById("color");
const body = document.body;

change.addEventListener('click', changeBG);

function changeBG() {
   const col1 = getRandomRgb();
   const col2 = getRandomRgb();
   const col3 = getRandomRgb();

   const colorString = 'rgb(${col1}, ${col2}, ${col3})';

   body.style.background = colorString;
   color.innerText = colorString;
}


function getRandomRgb() {
    return Math.floor(Math.random() * 256);
}