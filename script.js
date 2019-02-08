
// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

// import the style
import "./style.scss";

/*
  Put the JavaScript code you want below.
*/

let randomizeButton = document.querySelector('button');
let randIndex, temp;
randomizeButton.addEventListener('click', ()=> {
  for (let i = 1; i < 24; i += 2) {
    temp = imgContainer.childNodes[i].style.order;
    randIndex = Math.floor(Math.random() * 24);
    if (randIndex % 2 === 0) {
      randIndex++;
    }
    imgContainer.childNodes[i].style.order = imgContainer.childNodes[randIndex].style.order;
    imgContainer.childNodes[randIndex].style.order = temp;
  }
})
// Je suis content de terminer avec 12 lignes hehehe
